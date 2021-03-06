// Copyright (c) 2013 The Chromium OS Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/**
 * Namespace for the Camera app.
 */
var cca = cca || {};

/**
 * Namespace for the background page.
 */
cca.bg = {};

/**
 * Fixed minimum width of the window inner-bounds in pixels.
 * @type {number}
 * @const
 */
cca.bg.MIN_WIDTH = 768;

/**
 * Initial apsect ratio of the window inner-bounds.
 * @type {number}
 * @const
 */
cca.bg.INITIAL_ASPECT_RATIO = 1.3333333333;

/**
 * Top bar color of the window.
 * @type {string}
 * @const
 */
cca.bg.TOPBAR_COLOR = '#000000';

/**
 * Creates the window. Note, that only one window at once is supported.
 */
cca.bg.create = function() {
  new Promise((resolve) => {
    chrome.storage.local.get(
        {maximized: false, fullscreen: false}, (values) => {
          resolve(values.maximized || values.fullscreen);
        });
  }).then((maximized) => {
    // The height will be later calculated to match video aspect ratio once the
    // stream is available.
    var initialHeight = Math.round(
        cca.bg.MIN_WIDTH / cca.bg.INITIAL_ASPECT_RATIO);

    chrome.app.window.create('views/main.html', {
      id: 'main',
      frame: {color: cca.bg.TOPBAR_COLOR},
      hidden: true, // Will be shown from main.js once loaded.
      innerBounds: {
        width: cca.bg.MIN_WIDTH,
        height: initialHeight,
        minWidth: cca.bg.MIN_WIDTH,
        left: Math.round((window.screen.availWidth - cca.bg.MIN_WIDTH) / 2),
        top: Math.round((window.screen.availHeight - initialHeight) / 2),
      },
    }, (inAppWindow) => {
      // Temporary workaround for crbug.com/452737.
      // 'state' option in CreateWindowOptions is ignored when a window is
      // launched with 'hidden' option, so we restore window state here.
      // Don't launch in fullscreen as the topbar might not work as expected.
      if (maximized) {
        inAppWindow.maximize();
      }
      inAppWindow.onClosed.addListener(() => {
        chrome.storage.local.set({maximized: inAppWindow.isMaximized()});
        chrome.storage.local.set({fullscreen: inAppWindow.isFullscreen()});
      });
    });
  });
};

chrome.app.runtime.onLaunched.addListener(cca.bg.create);

chrome.runtime.getPlatformInfo(function(info) {
  if (info.os !== 'cros') {
    return;
  }

  const isNoOlderThan = (srcVer, targetVer) => {
    const srcVers = srcVer.split('.');
    const targetVers = targetVer.split('.');
    if (srcVers.length !== targetVers.length) {
      // Inavlid input versions.
      return false;
    }

    for (let i = 0; i < srcVers.length; i++) {
      const src = parseInt(srcVers[i]);
      const target = parseInt(targetVers[i]);
      if (src !== target) {
        return src > target;
      }
    }
    return true;
  }

  const chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];
  if (isNoOlderThan(chromeVersion, '88.0.4324.22')) {
    try {
      chrome.management.uninstallSelf();
    } catch (e) {
      console.error("Failed to uninstall legacy CCA: ", e);
    }
  }
});
