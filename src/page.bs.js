// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list.js");
var $$Array     = require("bs-platform/lib/js/array.js");
var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function str(prim) {
  return prim;
}

var component = ReasonReact.reducerComponent("Page");

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

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (param) {
      var state = param[/* state */2];
      var reduce = param[/* reduce */1];
      return React.createElement("section", undefined, React.createElement("div", {
                      className: "react-tags-input",
                      onClick: Curry._1(reduce, (function () {
                              return /* FocusClick */0;
                            }))
                    }, $$Array.of_list(List.map((function (tag) {
                                return React.createElement("span", {
                                            key: tag,
                                            className: "tag"
                                          }, tag, React.createElement("span", {
                                                className: "remove-tag",
                                                onClick: Curry._1(reduce, (function () {
                                                        return /* RemoveTagClick */Block.__(1, [tag]);
                                                      }))
                                              }, "X"));
                              }), state[/* tags */0])), React.createElement("input", {
                          ref: Curry._1(param[/* handle */0], setInputRef),
                          type: "text",
                          value: state[/* currentInput */1],
                          onKeyPress: Curry._1(reduce, keypress),
                          onChange: Curry._1(reduce, change)
                        })));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* tags : [] */0,
              /* currentInput */"",
              /* inputRef */[/* None */0]
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (typeof action === "number") {
        var match = state[/* inputRef */2][0];
        if (match) {
          return /* SideEffects */Block.__(2, [match[0].focus()]);
        } else {
          return /* NoUpdate */0;
        }
      } else {
        switch (action.tag | 0) {
          case 0 : 
              return /* Update */Block.__(0, [/* record */[
                          /* tags */state[/* tags */0],
                          /* currentInput */action[0],
                          /* inputRef */state[/* inputRef */2]
                        ]]);
          case 1 : 
              var tag = action[0];
              return /* Update */Block.__(0, [/* record */[
                          /* tags */List.filter((function (t) {
                                    return +(t !== tag);
                                  }))(state[/* tags */0]),
                          /* currentInput */state[/* currentInput */1],
                          /* inputRef */state[/* inputRef */2]
                        ]]);
          case 2 : 
              if (action[0] !== 13) {
                return /* NoUpdate */0;
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* tags */List.append(state[/* tags */0], /* :: */[
                                  state[/* currentInput */1],
                                  /* [] */0
                                ]),
                            /* currentInput */"",
                            /* inputRef */state[/* inputRef */2]
                          ]]);
              }
          
        }
      }
    });
  return newrecord;
}

exports.str         = str;
exports.component   = component;
exports.setInputRef = setInputRef;
exports.change      = change;
exports.keypress    = keypress;
exports.make        = make;
/* component Not a pure module */
