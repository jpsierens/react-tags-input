// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List         = require("bs-platform/lib/js/list.js");
var $$Array      = require("bs-platform/lib/js/array.js");
var Block        = require("bs-platform/lib/js/block.js");
var Curry        = require("bs-platform/lib/js/curry.js");
var React        = require("react");
var Js_boolean   = require("bs-platform/lib/js/js_boolean.js");
var ReasonReact  = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function str(prim) {
  return prim;
}

var component = ReasonReact.reducerComponent("TagsInput");

function setInputRef(r, param) {
  param[/* state */2][/* inputRef */2][0] = (r == null) ? /* None */0 : [r];
  return /* () */0;
}

function change($$event) {
  return /* Change */Block.__(0, [$$event.target.value]);
}

function keypress($$event) {
  return /* KeyPress */Block.__(2, [$$event.which]);
}

function clearClick() {
  return /* ClearClick */1;
}

function make(onTagInput, onTagRemove, onClear, clearAllText, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (param) {
      var state = param[/* state */2];
      var reduce = param[/* reduce */1];
      return React.createElement("div", {
                  className: "react-tags-input"
                }, React.createElement("div", {
                      className: "input-wrapper",
                      onClick: Curry._1(reduce, (function () {
                              return /* FocusClick */0;
                            }))
                    }, $$Array.of_list(List.map((function (tag) {
                                var match = +(state[/* duplicateTag */3] === tag);
                                return React.createElement("span", {
                                            key: tag,
                                            className: "tag " + (
                                              match !== 0 ? "duplicate" : ""
                                            )
                                          }, tag, React.createElement("span", {
                                                className: "remove-tag",
                                                onClick: Curry._1(reduce, (function () {
                                                        return /* RemoveTagClick */Block.__(1, [tag]);
                                                      }))
                                              }));
                              }), state[/* tags */0])), React.createElement("input", {
                          ref: Curry._1(param[/* handle */0], setInputRef),
                          type: "text",
                          value: state[/* currentInput */1],
                          onKeyPress: Curry._1(reduce, keypress),
                          onChange: Curry._1(reduce, change)
                        })), onClear ? React.createElement("span", {
                        className: "clear-all",
                        onClick: Curry._1(reduce, clearClick)
                      }, clearAllText ? clearAllText[0] : "Clear all") : "");
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* tags : [] */0,
              /* currentInput */"",
              /* inputRef */[/* None */0],
              /* duplicateTag */""
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (typeof action === "number") {
        if (action) {
          if (onClear) {
            Curry._1(onClear[0], /* () */0);
          }
          return /* Update */Block.__(0, [/* record */[
                      /* tags : [] */0,
                      /* currentInput */state[/* currentInput */1],
                      /* inputRef */state[/* inputRef */2],
                      /* duplicateTag */state[/* duplicateTag */3]
                    ]]);
        } else {
          var match = state[/* inputRef */2][0];
          if (match) {
            /* SideEffects */Block.__(2, [match[0].focus()]);
            return /* NoUpdate */0;
          } else {
            return /* NoUpdate */0;
          }
        }
      } else {
        switch (action.tag | 0) {
          case 0 : 
              return /* Update */Block.__(0, [/* record */[
                          /* tags */state[/* tags */0],
                          /* currentInput */action[0],
                          /* inputRef */state[/* inputRef */2],
                          /* duplicateTag */""
                        ]]);
          case 1 : 
              var tag = action[0];
              Curry._1(onTagRemove, tag);
              return /* Update */Block.__(0, [/* record */[
                          /* tags */List.filter((function (t) {
                                    return +(t !== tag);
                                  }))(state[/* tags */0]),
                          /* currentInput */state[/* currentInput */1],
                          /* inputRef */state[/* inputRef */2],
                          /* duplicateTag */state[/* duplicateTag */3]
                        ]]);
          case 2 : 
              if (action[0] !== 13) {
                return /* NoUpdate */0;
              } else {
                var exists = List.exists((function (t) {
                        return +(t === state[/* currentInput */1]);
                      }), state[/* tags */0]);
                if (exists) {
                  var duplicate = List.find((function (t) {
                          return +(t === state[/* currentInput */1]);
                        }), state[/* tags */0]);
                  return /* Update */Block.__(0, [/* record */[
                              /* tags */state[/* tags */0],
                              /* currentInput */state[/* currentInput */1],
                              /* inputRef */state[/* inputRef */2],
                              /* duplicateTag */duplicate
                            ]]);
                } else {
                  Curry._1(onTagInput, state[/* currentInput */1]);
                  return /* Update */Block.__(0, [/* record */[
                              /* tags */List.append(state[/* tags */0], /* :: */[
                                    state[/* currentInput */1],
                                    /* [] */0
                                  ]),
                              /* currentInput */"",
                              /* inputRef */state[/* inputRef */2],
                              /* duplicateTag */state[/* duplicateTag */3]
                            ]]);
                }
              }
              break;
          
        }
      }
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.onTagInput, jsProps.onTagRemove, Js_primitive.null_undefined_to_opt(jsProps.onClear), Js_primitive.null_undefined_to_opt(jsProps.clearAllText), /* array */[]);
      }));

var bool = Js_boolean.to_js_boolean;

exports.str         = str;
exports.bool        = bool;
exports.component   = component;
exports.setInputRef = setInputRef;
exports.change      = change;
exports.keypress    = keypress;
exports.clearClick  = clearClick;
exports.make        = make;
exports.$$default   = $$default;
exports.default     = $$default;
exports.__esModule  = true;
/* component Not a pure module */
