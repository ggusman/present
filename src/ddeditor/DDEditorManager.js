//The MIT License (MIT)
//
//Copyright (c) 2014 ggusman
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global brackets, define, $, Mustache, window */

define(function (require, exports, module) {
    "use strict";
    
    console.log("LOADED DDEditorManager");
    
    //var _ = require("thirdparty/lodash");
    
    var _$btnTextButton = null;
    
    // Load dependent modules
    
    var AppInit                     = require("utils/AppInit"),
        TextComponent               = require("ddeditor/components/TextComponent").TextComponent;
    
    var _dragX = 0, _dragY = 0;
    
    function _setupTextButton()
    {
        _$btnTextButton = $("#text-component");
        _$btnTextButton.click(function() {
            _handleAddText();
        });
    }
    
    function _handleAddText()
    {
        var newTextComponent = new TextComponent();
    }
    
    function _setupImageButton()
    {
        
    }
    
    AppInit.appReady(function () {
        
        _setupTextButton();
        _setupImageButton();
        //$("#toolbar-test").css("display", "none");
//        interact('#toolbar-test')
//            .draggable({
//                onmove: function (event) {
//                    _dragX += event.dx;
//                    _dragY += event.dy;
//
//                    event.target.style.webkitTransform =
//                    event.target.style.transform =
//                        'translate(' + _dragX + 'px, ' + _dragY + 'px)';
//                },
//                onend: function (event) {
//                    event.target.querySelector('p').textContent =
//                        'moved a distance of '
//                        + (Math.sqrt(event.dx * event.dx +
//                                     event.dy * event.dy)|0) + 'px';
//                }
//            })
//            .restrict({
//                endOnly: true
//        });
//        
//        interact('#editor')
//            // enable draggables to be dropped into this
//            .dropzone(true)
//            // only accept elements matching this CSS selector
//            .accept('#toolbar-test')
//            .on('drop', function (event) {
//                event.relatedTarget.textContent = 'Dropped';
//        });
        
        //_addImage();
    });
    
//    // Unit tests
//    exports._performChanges = _performChanges;
});