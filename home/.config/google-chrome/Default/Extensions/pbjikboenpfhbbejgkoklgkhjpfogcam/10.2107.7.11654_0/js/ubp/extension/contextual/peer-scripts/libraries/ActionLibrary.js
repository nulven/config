var Action;
(function (Action) {
    var ActionLibrary = (function () {
        function ActionLibrary(_htmlDocument, _actionHandler) {
            this._htmlDocument = _htmlDocument;
            this._actionHandler = _actionHandler;
            this._actionListeners = {};
            this._apiMap = {
                "UBPActionRegister": this.register.bind(this),
                "UBPActionDeregister": this.deregister.bind(this)
            };
        }
        ActionLibrary.prototype._generateActionListenerId = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = (c == 'x' ? r : (r & 0x3 | 0x8));
                return v.toString(16);
            });
        };
        ActionLibrary.prototype._generateActionListener = function (actionListenerId, eventName) {
            var self = this;
            return function () {
                self._actionHandler({
                    actionListenerId: actionListenerId,
                    eventName: eventName
                });
            };
        };
        ActionLibrary.prototype._getElement = function (elementCssSelector) {
            var element = this._htmlDocument.querySelector(elementCssSelector);
            if (!element) {
                throw new Error("ActionLibrary.register() couldn't find the specified element.");
            }
            return element;
        };
        ActionLibrary.prototype.register = function (actionSpecification) {
            if (!actionSpecification ||
                !actionSpecification.elementCssSelector ||
                !actionSpecification.eventName) {
                throw new Error("ActionLibrary.register() requires elementCssSelector and eventName.");
            }
            var element = this._getElement(actionSpecification.elementCssSelector);
            var actionListenerId = this._generateActionListenerId();
            var actionListener = this._generateActionListener(actionListenerId, actionSpecification.eventName);
            if (typeof element.addEventListener !== "function") {
                throw new Error("ActionListener.register() couldn't add action listener to the specified element.");
            }
            element.addEventListener(actionSpecification.eventName, actionListener);
            this._actionListeners[actionListenerId] = {
                element: element,
                listener: actionListener,
                eventName: actionSpecification.eventName
            };
            return actionListenerId;
        };
        ActionLibrary.prototype.deregister = function (actionListenerId) {
            var actionListener = this._actionListeners[actionListenerId];
            if (actionListener) {
                actionListener.element.removeEventListener(actionListener.eventName, actionListener.listener);
            }
            else {
                throw new Error("ActionLibrary.deregister() couldn't remove action listener for the specified actionListenerId.");
            }
            delete this._actionListeners[actionListenerId];
        };
        ActionLibrary.prototype.canHandle = function (requestType) {
            if (typeof this._apiMap[requestType] === "function") {
                return true;
            }
            else {
                return false;
            }
        };
        ActionLibrary.prototype.handle = function (requestType, payload) {
            if (!this.canHandle(requestType)) {
                throw new Error("ActionLibrary: Cannot handle " + requestType + ".");
            }
            return this._apiMap[requestType](payload);
        };
        return ActionLibrary;
    }());
    Action.ActionLibrary = ActionLibrary;
})(Action || (Action = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uTGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy91YnAvZXh0ZW5zaW9uL2NvbnRleHR1YWwvcGVlci1zY3JpcHRzL2xpYnJhcmllcy9BY3Rpb25MaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsTUFBTSxDQW1OZjtBQW5ORCxXQUFVLE1BQU07SUF1Q1o7UUEyQkksdUJBQW9CLGFBQXNCLEVBQVUsY0FBdUI7WUFBdkQsa0JBQWEsR0FBYixhQUFhLENBQVM7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBUztZQW5CbkUscUJBQWdCLEdBRXBCLEVBQUUsQ0FBQztZQWtCSCxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNYLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0MscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BELENBQUM7UUFDTixDQUFDO1FBT0QsaURBQXlCLEdBQXpCO1lBQ0ksT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBYy9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQVNELCtDQUF1QixHQUF2QixVQUF3QixnQkFBdUIsRUFBRSxTQUFnQjtZQUM3RCxJQUFJLElB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Q0FBQTtBQU9MLENBQUMsRUFuTlMsTUFBTSxLQUFOLE1BQU0sUUFtTmYiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQWN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBBIGNvbXBvbmVudCB0aGF0IHRyYWNrcyB0aGUgZXZlbnRzIChyZWZlcnJlZCB0byBhcyBhY3Rpb25zIGhlcmUpIG9uIHRoZSBVc2VyJ3MgcGFnZVxuICAgICAqIGFuZCBub3RpZmllcyB0aGUgaW50ZXJlc3RlZCBwYXJ0aWVzIGFib3V0IHRoZSBldmVudHMgdGhhdCB0aGVzZSBwYXJ0aWVzIGFyZSBzdWJzY3JpYmVkIHRvLlxuICAgICAqXG4gICAgICogKFRvIGF2b2lkIG92ZXItdXNpbmcgdGhlIHdvcmQgXCJFdmVudHNcIiB3ZSdyZSBjYWxsaW5nIHRoaXMgdGhlIEFjdGlvbiBsaWJyYXJ5LCBpbnN0ZWFkIG9mIEV2ZW50IGxpYnJhcnkpXG4gICAgICpcbiAgICAgKiBBbiBBY3Rpb24gbGlicmFyeSBpcyB1c2VkIGluIHRoZSBmb2xsb3dpbmcgbWFubmVyOlxuICAgICAqXG4gICAgICogPGNvZGU+XG4gICAgICogLy8gY3JlYXRlIGFuIEFjdGlvbkxpYnJhcnkgd2l0aCBhbiBhY3Rpb25IYW5kbGVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYW5cbiAgICAgKiAvLyBhY3Rpb24gaXMgcGVyZm9ybWVkIGluIHRoZSBEb2N1bWVudC5cbiAgICAgKiB2YXIgbGlicmFyeSA9IG5ldyBBY3Rpb24uQWN0aW9uTGlicmFyeSh7XG4gICAgICogICAgICBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICogICAgICBhY3Rpb25IYW5kbGVyOiBGdW5jdGlvblxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogLy8gbGlzdGVuIHRvIHRoZSBzcGVjaWZpZWQgYWN0aW9uIChldmVudCkgb24gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICogdmFyIGFjdGlvblNwZWNpZmljYXRpb24gPSB7XG4gICAgICogICAgICBldmVudE5hbWU6IFwiY2xpY2tcIixcbiAgICAgKiAgICAgIGVsZW1lbnRDc3NTZWxlY3RvcjogXCIjc29tZURpdklkXCJcbiAgICAgKiB9O1xuICAgICAqIGxpYnJhcnkuaGFuZGxlKFwiVUJQQWN0aW9uUmVnaXN0ZXJcIiwgYWN0aW9uU3BlY2lmaWNhdGlvbik7XG4gICAgICogPT4gYWN0aW9uTGlzdGVuZXJJZFxuICAgICAqXG4gICAgICogLy8gc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGFib3ZlIGFjdGlvbi5cbiAgICAgKiBsaWJyYXJ5LmhhbmRsZShcIlVCUEFjdGlvbkRlcmVnaXN0ZXJcIiwgYWN0aW9uTGlzdGVuZXJJZCk7XG4gICAgICogPC9jb2RlPlxuICAgICAqXG4gICAgICogWFhYOiBwZWVyIHNjcmlwdHMgY2Fubm90IHVzZSB0aGUgbW9kdWxlIGxvYWRlciBhcyB0aGV5IGFyZSB0byBiZSBpbmplY3RlZFxuICAgICAqIG9udG8gdGhlIHBhZ2UgZGlyZWN0bHkgYW5kIHRodXMgbmVlZCB0byBsaWdodC13ZWlnaHQuXG4gICAgICpcbiAgICAgKiBYWFgtMjogVGhpcyBsaWJyYXJ5IG5lZWRzIHRvIGJlIGluamVjdGVkIG9udG8gdGhlIHBhZ2UgYmVmb3JlIEFjdGlvbkRyaXZlclxuICAgICAqIGFzIHRoZSBkcml2ZXIgbmVlZHMgdGhlIGxpYnJhcnkgYmVmb3JlIGJvb3RzdHJhcHBpbmcgYnV0IHRoZXJlIGlzIG5vXG4gICAgICogbW9kdWxlIGxvYWRlciBhdmFpbGFibGUgaW4gY29udGVudCBzY3JpcHQgY29udGV4dC5cbiAgICAgKlxuICAgICAqIEBhdXRob3IgamVldHViXG4gICAgICpcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQWN0aW9uTGlicmFyeSBpbXBsZW1lbnRzIElDb250ZXh0dWFsUGVlckxpYnJhcnkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yZXMgYSBtYXBwaW5nIG9mIGFjdGlvbkxpc3RlbmVySWQgdG8gSUFjdGlvbkxpc3RlbmVycy5cbiAgICAgICAgICogRm9yIGV2ZXJ5IFVCUEFjdGlvblJlZ2lzdGVyLCBhbiBlbnRyeSBpcyBjcmVhdGVkIGluIHRoaXMgbWFwLlxuICAgICAgICAgKiBPbmNlIHRoZSBVQlBBY3Rpb25EZXJlZ2lzdGVyIGlzIHBlcmZvcm1lZCBmb3IgdGhlIGFjdGlvbkxpc3RlbmVySWQsXG4gICAgICAgICAqIHRoZSBlbnRyeSBpcyByZW1vdmVkIGZyb20gdGhpcyBtYXAuXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIF9hY3Rpb25MaXN0ZW5lcnM6e1xuICAgICAgICAgICAgW2FjdGlvbkxpc3RlbmVySWQ6c3RyaW5nXTpJQWN0aW9uTGlzdGVuZXJcbiAgICAgICAgfSA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yZXMgYSBtYXBwaW5nIG9mIHJlcXVlc3RUeXBlIChmb3IgZXhhbXBsZSwgVUJQQWN0aW9uUmVnaXN0ZXIpIHRvXG4gICAgICAgICAqIHRoZSBBY3Rpb25MaWJyYXJ5IEFQSSAoZm9yIGV4YW1wbGUsIHJlZ2lzdGVyKS5cbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgX2FwaU1hcDp7XG4gICAgICAgICAgICBbcmVxdWVzdFR5cGU6c3RyaW5nXTpGdW5jdGlvblxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIHdpdGggdGhlIGdpdmVuIGh0bWxEb2N1bWVudCBhbmQgYWN0aW9uSGFuZGxlci4gQWxzbywgcG9wdWxhdGVzIHRoZVxuICAgICAgICAgKiBBY3Rpb25MaWJyYXJ5Ll9hcGlNYXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBodG1sRG9jdW1lbnQgLSBEb2N1bWVudCBvYmplY3QgdGhhdCBjb250YWlucyBlbGVtZW50cyBvbiB3aGljaCBhY3Rpb25zIGxpc3RlbmVycyBhcmUgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICAgICAgICogQHBhcmFtIGFjdGlvbkhhbmRsZXIgLSBIYW5kbGVyIHRvIGJlIGludm9rZWQgd2hlbiBhIHJlZ2lzdGVyZWQgYWN0aW9uIG9jY3Vycy5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0bWxEb2N1bWVudDpEb2N1bWVudCwgcHJpdmF0ZSBfYWN0aW9uSGFuZGxlcjpGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fYXBpTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVUJQQWN0aW9uUmVnaXN0ZXJcIjogdGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIFwiVUJQQWN0aW9uRGVyZWdpc3RlclwiOiB0aGlzLmRlcmVnaXN0ZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSBVVUlEIHRvIGJlIHVzZWQgYXMgYW4gYWN0aW9uTGlzdGVuZXJJZC5cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9nZW5lcmF0ZUFjdGlvbkxpc3RlbmVySWQoKTpzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG5cbiAgICAgICAgICAgICAgICAvLyByICYgMHgzIHwgMHg4IGNvZXJjZXMgYW55IFIgdmFsdWUgdG8gb25lIG9mOlxuICAgICAgICAgICAgICAgIC8vIDBiMDEwMDAgKDB4OClcbiAgICAgICAgICAgICAgICAvLyAwYjAxMDAxICgweDkpXG4gICAgICAgICAgICAgICAgLy8gMGIwMTAxMCAoMHhBKVxuICAgICAgICAgICAgICAgIC8vIDBiMDEwMTEgKDB4QilcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2U6XG4gICAgICAgICAgICAgICAgLy8gMHgzICAgICAgID0gMGIwMDAxMVxuICAgICAgICAgICAgICAgIC8vIDB4OCAgICAgICA9IDBiMDEwMDBcbiAgICAgICAgICAgICAgICAvLyAweDMgfCAweDggPSAwYjAxMDExXG4gICAgICAgICAgICAgICAgLy8gciAmIDB4MyAgID0gKDBiMDAwMDAgfCAwYjAwMDAxIHwgMGIwMDAxMCB8IDBiMDAwMTEpXG5cbiAgICAgICAgICAgICAgICB2YXIgdiA9IChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyBhbiBhY3Rpb24gbGlzdGVuZXIgdG8gYmUgaW52b2tlZCB3aGVuIGEgcmVnaXN0ZXJlZCBhY3Rpb24gb2NjdXJzLlxuICAgICAgICAgKiBAcGFyYW0gYWN0aW9uTGlzdGVuZXJJZFxuICAgICAgICAgKiBAcGFyYW0gZXZlbnROYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHtFdmVudExpc3RlbmVyfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2dlbmVyYXRlQWN0aW9uTGlzdGVuZXIoYWN0aW9uTGlzdGVuZXJJZDpzdHJpbmcsIGV2ZW50TmFtZTpzdHJpbmcpOkV2ZW50TGlzdGVuZXIge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIDxFdmVudExpc3RlbmVyPiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYWN0aW9uSGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkxpc3RlbmVySWQ6IGFjdGlvbkxpc3RlbmVySWQsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIENTUyBzZWxlY3RvciBwcm92aWRlZC5cbiAgICAgICAgICogQHBhcmFtIGVsZW1lbnRDc3NTZWxlY3RvclxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZ2V0RWxlbWVudChlbGVtZW50Q3NzU2VsZWN0b3I6c3RyaW5nKTpIVE1MRWxlbWVudCB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudDpIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9odG1sRG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50Q3NzU2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWN0aW9uTGlicmFyeS5yZWdpc3RlcigpIGNvdWxkbid0IGZpbmQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVycyBhbiBhY3Rpb24gbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBhY3Rpb24gc3BlY2lmaWNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIGFjdGlvblNwZWNpZmljYXRpb25cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ30gYWN0aW9uTGlzdGVuZXJJZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXIoYWN0aW9uU3BlY2lmaWNhdGlvbjpJQWN0aW9uU3BlY2lmaWNhdGlvbik6c3RyaW5nIHtcbiAgICAgICAgICAgIGlmICghYWN0aW9uU3BlY2lmaWNhdGlvbiB8fFxuICAgICAgICAgICAgICAgICFhY3Rpb25TcGVjaWZpY2F0aW9uLmVsZW1lbnRDc3NTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICFhY3Rpb25TcGVjaWZpY2F0aW9uLmV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbkxpYnJhcnkucmVnaXN0ZXIoKSByZXF1aXJlcyBlbGVtZW50Q3NzU2VsZWN0b3IgYW5kIGV2ZW50TmFtZS5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50OkhUTUxFbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudChhY3Rpb25TcGVjaWZpY2F0aW9uLmVsZW1lbnRDc3NTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIHZhciBhY3Rpb25MaXN0ZW5lcklkOnN0cmluZyA9IHRoaXMuX2dlbmVyYXRlQWN0aW9uTGlzdGVuZXJJZCgpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbkxpc3RlbmVyOkV2ZW50TGlzdGVuZXIgPSB0aGlzLl9nZW5lcmF0ZUFjdGlvbkxpc3RlbmVyKGFjdGlvbkxpc3RlbmVySWQsIGFjdGlvblNwZWNpZmljYXRpb24uZXZlbnROYW1lKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbkxpc3RlbmVyLnJlZ2lzdGVyKCkgY291bGRuJ3QgYWRkIGFjdGlvbiBsaXN0ZW5lciB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFjdGlvblNwZWNpZmljYXRpb24uZXZlbnROYW1lLCBhY3Rpb25MaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbkxpc3RlbmVyc1thY3Rpb25MaXN0ZW5lcklkXSA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBhY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGFjdGlvblNwZWNpZmljYXRpb24uZXZlbnROYW1lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uTGlzdGVuZXJJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXJlZ2lzdGVyIGFuIGFjdGlvbiBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGFjdGlvbiBzcGVjaWZpY2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0gYWN0aW9uTGlzdGVuZXJJZFxuICAgICAgICAgKi9cbiAgICAgICAgZGVyZWdpc3RlcihhY3Rpb25MaXN0ZW5lcklkOnN0cmluZykge1xuICAgICAgICAgICAgdmFyIGFjdGlvbkxpc3RlbmVyOklBY3Rpb25MaXN0ZW5lciA9IHRoaXMuX2FjdGlvbkxpc3RlbmVyc1thY3Rpb25MaXN0ZW5lcklkXTtcbiAgICAgICAgICAgIGlmIChhY3Rpb25MaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhY3Rpb25MaXN0ZW5lci5ldmVudE5hbWUsIGFjdGlvbkxpc3RlbmVyLmxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbkxpYnJhcnkuZGVyZWdpc3RlcigpIGNvdWxkbid0IHJlbW92ZSBhY3Rpb24gbGlzdGVuZXIgZm9yIHRoZSBzcGVjaWZpZWQgYWN0aW9uTGlzdGVuZXJJZC5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hY3Rpb25MaXN0ZW5lcnNbYWN0aW9uTGlzdGVuZXJJZF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW1wbGVtZW50IHtAbGluayBJQ29udGV4dHVhbFBlZXJMaWJyYXJ5fSB0byByZXNwb25kIHRvXG4gICAgICAgICAqIG9ubHkgVUJQQWN0aW9uKiByZXF1ZXN0cy5cbiAgICAgICAgICogQHBhcmFtIHJlcXVlc3RUeXBlXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgY2FuSGFuZGxlKHJlcXVlc3RUeXBlOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FwaU1hcFtyZXF1ZXN0VHlwZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyB0aGUgbWVzc2FnZSBmcm9tIHRoZSAxLUJBIGFuZCBpbnZva2VzIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QsXG4gICAgICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlKHJlcXVlc3RUeXBlOnN0cmluZywgcGF5bG9hZDphbnkpOmFueSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuSGFuZGxlKHJlcXVlc3RUeXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbkxpYnJhcnk6IENhbm5vdCBoYW5kbGUgXCIgKyByZXF1ZXN0VHlwZSArIFwiLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcGlNYXBbcmVxdWVzdFR5cGVdKHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW50ZXJmYWNlIElBY3Rpb25MaXN0ZW5lciB7XG4gICAgICAgIGVsZW1lbnQ6SFRNTEVsZW1lbnQ7XG4gICAgICAgIGxpc3RlbmVyOkV2ZW50TGlzdGVuZXI7XG4gICAgICAgIGV2ZW50TmFtZTpzdHJpbmc7XG4gICAgfVxufVxuIl19