(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"class":"Player","propagateClick":false,"scrollBarMargin":2,"hash": "73c7c43fd39eb25dafcf0e235a2312e75690247cba1be5cc2a464c669882893d", "definitions": [{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_01CF42D6_1D39_934F_41A2_69BB6BAB5C0D"]},{"surfaceReticleMinRadius":15,"class":"Model3D","thumbnailUrl":"media/model_04C45623_1D38_B2C4_41AB_408D9883D879_t.jpg","antialiasingLevel":0.3,"castShadow":true,"backgroundPanoramaURL":"media/model_04C45623_1D38_B2C4_41AB_408D9883D879/bg_C604BA5D_D7E1_69E9_41D5_DDD2E7C53D37.jpg","id":"model_04C45623_1D38_B2C4_41AB_408D9883D879","backgroundColor":"#333333","data":{"maxDistanceObjectsVisible":10,"keepModel3DLoadedWithoutLocation":true,"label":"File NA","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"panoramaToPanoramaModelTransitionEnabled":true},"receiveShadow":true,"environmentURL":"media/model_04C45623_1D38_B2C4_41AB_408D9883D879/bg_C604BA5D_D7E1_69E9_41D5_DDD2E7C53D37.jpg","environmentIntensity":0.45,"surfaceReticleMaxRadius":50,"floorRadius":149.64,"model":"this.res_CED8269A_C2AA_8088_41E2_30B50231BF76","surfaceReticleRadius":0.02,"camera":"this.cam_C9D3CB3C_C2AA_8189_41E2_3E433CF65C65","surfaceSelectionCoef":2,"objects":[],"maxNearestObjectsVisible":20,"lights":["this.light_C92F6B3D_C2AA_818B_41CD_BFD8AB4A095B","this.light_CD887122_C2AF_81B9_41C0_58EC796A6058"],"label":trans('model_04C45623_1D38_B2C4_41AB_408D9883D879.label'),"sphericalHarmonicsMaxDegree":3},{"progressBorderRadius":2,"propagateClick":false,"progressLeft":"33%","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipPaddingRight":6,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingBottom":4,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowColor":"#333138","toolTipBorderColor":"#767676","subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","progressBackgroundColorRatios":[0],"progressOpacity":0.7,"progressRight":"33%","class":"ViewerArea","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"firstTransitionDuration":0,"id":"MainViewer","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"minHeight":50,"playbackBarHeadShadowColor":"#000000","minWidth":100,"playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","progressBottom":10,"progressHeight":2,"progressBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","playbackBarHeadShadow":true,"progressBarBorderRadius":2,"playbackBarHeadShadowVerticalLength":0,"height":"100%","progressBarBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBottom":5,"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"media":"this.model_04C45623_1D38_B2C4_41AB_408D9883D879","end":"this.trigger('tourEnded')","player":"this.MainViewerModel3DPlayer","id":"Model3DPlayListItem_01CF42D6_1D39_934F_41A2_69BB6BAB5C0D","class":"Model3DPlayListItem","begin":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_01CF42D6_1D39_934F_41A2_69BB6BAB5C0D, {\"y\":0.99769,\"pitch\":0.72,\"x\":0.18189,\"z\":31.75668,\"yaw\":-0.57}, 2, 'cubic_in_out'); this.mainPlayList.set('selectedIndex', 0); ","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)"},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_04C45623_1D38_B2C4_41AB_408D9883D879/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_04C45623_1D38_B2C4_41AB_408D9883D879/scene_mobile.glb","tags":"mobile"}],"id":"res_CED8269A_C2AA_8088_41E2_30B50231BF76","class":"Model3DResource"},{"rotationSpeed":0.59,"class":"FirstPersonModel3DCamera","maxX":21.21,"minY":0.01,"translationSpeed":0.953,"id":"cam_C9D3CB3C_C2AA_8189_41E2_3E433CF65C65","initialY":9.91,"autoNearFar":true,"vrEnabled":true,"initialZ":34.68,"maxY":33.25,"minX":-20.74,"maxStepHeight":0.32,"initialPitch":0.72,"maxZ":34.68,"initialFov":105,"initialYaw":-0.56,"initialX":0.16,"minZ":-35.54},{"id":"light_C92F6B3D_C2AA_818B_41CD_BFD8AB4A095B","class":"AmbientLight","intensity":0.35},{"id":"light_CD887122_C2AF_81B9_41C0_58EC796A6058","shadowTolerance":0.79,"shadowRadius":50,"pitch":14,"class":"OrbitLight","yaw":22,"castShadow":true,"shadowBias":-0.309,"intensity":0.85,"color":"#FFCC66"}],"id":"rootPlayer","gap":10,"data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"history":{},"locales":{"en":"locale/en.txt"},"name":"Player715","defaultLocale":"en"},"backgroundColor":["#FFFFFF"],"layout":"absolute","start":"this.init()","defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scripts":{"getKey":TDV.Tour.Script.getKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"clone":TDV.Tour.Script.clone,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setValue":TDV.Tour.Script.setValue,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"disableVR":TDV.Tour.Script.disableVR,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupImage":TDV.Tour.Script.showPopupImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeJS":TDV.Tour.Script.executeJS,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"toggleVR":TDV.Tour.Script.toggleVR,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"init":TDV.Tour.Script.init,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showWindowBase":TDV.Tour.Script.showWindowBase,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"createTween":TDV.Tour.Script.createTween,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"mixObject":TDV.Tour.Script.mixObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"existsKey":TDV.Tour.Script.existsKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"unloadViewer":TDV.Tour.Script.unloadViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"enableVR":TDV.Tour.Script.enableVR},"minHeight":0,"watermark":false,"minWidth":0,"height":"100%","width":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Fri Oct 9 2026