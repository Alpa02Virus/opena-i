"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2708], {
        65374: function(e, a, o) {
            o.d(a, {
                VY: function() {
                    return y
                },
                aV: function() {
                    return V
                },
                fC: function() {
                    return L
                },
                xz: function() {
                    return P
                }
            });
            var n = o(45675),
                t = o(70079),
                r = o(72901),
                i = o(36646),
                l = o(83208),
                u = o(55691),
                c = o(39073),
                d = o(28036),
                p = o(86004),
                s = o(88817);
            let h = "Tabs",
                [w, M] = (0, i.b)(h, [l.Pc]),
                f = (0, l.Pc)(),
                [C, m] = w(h),
                v = (0, t.forwardRef)((e, a) => {
                    let {
                        __scopeTabs: o,
                        value: r,
                        onValueChange: i,
                        defaultValue: l,
                        orientation: u = "horizontal",
                        dir: h,
                        activationMode: w = "automatic",
                        ...M
                    } = e, f = (0, d.gm)(h), [m, v] = (0, p.T)({
                        prop: r,
                        onChange: i,
                        defaultProp: l
                    });
                    return (0, t.createElement)(C, {
                        scope: o,
                        baseId: (0, s.M)(),
                        value: m,
                        onValueChange: v,
                        orientation: u,
                        dir: f,
                        activationMode: w
                    }, (0, t.createElement)(c.WV.div, (0, n.Z)({
                        dir: f,
                        "data-orientation": u
                    }, M, {
                        ref: a
                    })))
                }),
                T = (0, t.forwardRef)((e, a) => {
                    let {
                        __scopeTabs: o,
                        loop: r = !0,
                        ...i
                    } = e, u = m("TabsList", o), d = f(o);
                    return (0, t.createElement)(l.fC, (0, n.Z)({
                        asChild: !0
                    }, d, {
                        orientation: u.orientation,
                        dir: u.dir,
                        loop: r
                    }), (0, t.createElement)(c.WV.div, (0, n.Z)({
                        role: "tablist",
                        "aria-orientation": u.orientation
                    }, i, {
                        ref: a
                    })))
                }),
                g = (0, t.forwardRef)((e, a) => {
                    let {
                        __scopeTabs: o,
                        value: i,
                        disabled: u = !1,
                        ...d
                    } = e, p = m("TabsTrigger", o), s = f(o), h = F(p.baseId, i), w = A(p.baseId, i), M = i === p.value;
                    return (0, t.createElement)(l.ck, (0, n.Z)({
                        asChild: !0
                    }, s, {
                        focusable: !u,
                        active: M
                    }), (0, t.createElement)(c.WV.button, (0, n.Z)({
                        type: "button",
                        role: "tab",
                        "aria-selected": M,
                        "aria-controls": w,
                        "data-state": M ? "active" : "inactive",
                        "data-disabled": u ? "" : void 0,
                        disabled: u,
                        id: h
                    }, d, {
                        ref: a,
                        onMouseDown: (0, r.M)(e.onMouseDown, e => {
                            u || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : p.onValueChange(i)
                        }),
                        onKeyDown: (0, r.M)(e.onKeyDown, e => {
                            [" ", "Enter"].includes(e.key) && p.onValueChange(i)
                        }),
                        onFocus: (0, r.M)(e.onFocus, () => {
                            let e = "manual" !== p.activationMode;
                            M || u || !e || p.onValueChange(i)
                        })
                    })))
                }),
                S = (0, t.forwardRef)((e, a) => {
                    let {
                        __scopeTabs: o,
                        value: r,
                        forceMount: i,
                        children: l,
                        ...d
                    } = e, p = m("TabsContent", o), s = F(p.baseId, r), h = A(p.baseId, r), w = r === p.value, M = (0, t.useRef)(w);
                    return (0, t.useEffect)(() => {
                        let e = requestAnimationFrame(() => M.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, t.createElement)(u.z, {
                        present: i || w
                    }, ({
                        present: o
                    }) => (0, t.createElement)(c.WV.div, (0, n.Z)({
                        "data-state": w ? "active" : "inactive",
                        "data-orientation": p.orientation,
                        role: "tabpanel",
                        "aria-labelledby": s,
                        hidden: !o,
                        id: h,
                        tabIndex: 0
                    }, d, {
                        ref: a,
                        style: { ...e.style,
                            animationDuration: M.current ? "0s" : void 0
                        }
                    }), o && l))
                });

            function F(e, a) {
                return `${e}-trigger-${a}`
            }

            function A(e, a) {
                return `${e}-content-${a}`
            }
            let L = v,
                V = T,
                P = g,
                y = S
        },
        72201: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return l
                }
            });
            var n = o(24421),
                t = o(28734),
                r = o(51516);

            function i(e) {
                (0, r.Z)(1, arguments);
                var a = (0, t.Z)(e);
                return a.setHours(0, 0, 0, 0), a
            }

            function l(e, a) {
                (0, r.Z)(2, arguments);
                var o = i(e),
                    t = i(a);
                return Math.round((o.getTime() - (0, n.Z)(o) - (t.getTime() - (0, n.Z)(t))) / 864e5)
            }
        },
        26430: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return r
                }
            });
            var n = o(28734),
                t = o(51516);

            function r(e, a) {
                return (0, t.Z)(2, arguments), (0, n.Z)(e).getTime() - (0, n.Z)(a).getTime()
            }
        },
        84913: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return r
                }
            });
            var n = o(28734),
                t = o(51516);

            function r() {
                return function(e) {
                    (0, t.Z)(1, arguments);
                    var a = (0, n.Z)(e);
                    return a.setHours(23, 59, 59, 999), a
                }(Date.now())
            }
        },
        44043: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return r
                }
            });
            var n = o(28734),
                t = o(51516);

            function r(e) {
                return (0, t.Z)(1, arguments), (0, n.Z)(e).getMonth()
            }
        },
        82187: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return r
                }
            });
            var n = o(28734),
                t = o(51516);

            function r(e) {
                return (0, t.Z)(1, arguments), (0, n.Z)(e).getFullYear()
            }
        },
        69262: function(e, a, o) {
            o.d(a, {
                Z: function() {
                    return r
                }
            });
            var n = o(28734),
                t = o(51516);

            function r(e) {
                return (0, t.Z)(1, arguments),
                    function(e, a) {
                        (0, t.Z)(2, arguments);
                        var o = (0, n.Z)(e),
                            r = (0, n.Z)(a);
                        return o.getFullYear() === r.getFullYear()
                    }(e, Date.now())
            }
        },
        45248: function(e, a) {
            for (var o = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), n = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, t = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: o ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, r = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, i = 1; i < 20; i++) r["f" + i] = 111 + i;

            function l(e) {
                return e = t[e = e.toLowerCase()] || e
            }
            a.ZP = function(e, a, o) {
                !a || "byKey" in a || (o = a, a = null), Array.isArray(e) || (e = [e]);
                var i = e.map(function(e) {
                        return function(e, a) {
                            var o = a && a.byKey,
                                i = {},
                                u = (e = e.replace("++", "+add")).split("+"),
                                c = u.length;
                            for (var d in n) i[n[d]] = !1;
                            var p = !0,
                                s = !1,
                                h = void 0;
                            try {
                                for (var w, M = u[Symbol.iterator](); !(p = (w = M.next()).done); p = !0) {
                                    var f, C = w.value,
                                        m = C.endsWith("?") && C.length > 1;
                                    m && (C = C.slice(0, -1));
                                    var v = l(C),
                                        T = n[v];
                                    if (C.length > 1 && !T && !t[C] && !r[v]) throw TypeError('Unknown modifier: "' + C + '"');
                                    1 !== c && T || (o ? i.key = v : i.which = (f = C, r[f = l(f)] || f.toUpperCase().charCodeAt(0))), T && (i[T] = !m || null)
                                }
                            } catch (e) {
                                s = !0, h = e
                            } finally {
                                try {
                                    !p && M.return && M.return()
                                } finally {
                                    if (s) throw h
                                }
                            }
                            return i
                        }(e, a)
                    }),
                    u = function(e) {
                        return i.some(function(a) {
                            return function(e, a) {
                                for (var o in e) {
                                    var n = e[o],
                                        t = void 0;
                                    if (null != n && (null != (t = "key" === o && null != a.key ? a.key.toLowerCase() : "which" === o ? 91 === n && 93 === a.which ? 91 : a.which : a[o]) || !1 !== n) && t !== n) return !1
                                }
                                return !0
                            }(a, e)
                        })
                    };
                return null == o ? u : u(o)
            }
        },
        15858: function(e, a) {
            var o;
            (o = a.s || (a.s = {})).Unidentified = "Unidentified", o.Alt = "Alt", o.AltGraph = "AltGraph", o.CapsLock = "CapsLock", o.Control = "Control", o.Fn = "Fn", o.FnLock = "FnLock", o.Hyper = "Hyper", o.Meta = "Meta", o.NumLock = "NumLock", o.ScrollLock = "ScrollLock", o.Shift = "Shift", o.Super = "Super", o.Symbol = "Symbol", o.SymbolLock = "SymbolLock", o.Enter = "Enter", o.Tab = "Tab", o.ArrowDown = "ArrowDown", o.ArrowLeft = "ArrowLeft", o.ArrowRight = "ArrowRight", o.ArrowUp = "ArrowUp", o.End = "End", o.Home = "Home", o.PageDown = "PageDown", o.PageUp = "PageUp", o.Backspace = "Backspace", o.Clear = "Clear", o.Copy = "Copy", o.CrSel = "CrSel", o.Cut = "Cut", o.Delete = "Delete", o.EraseEof = "EraseEof", o.ExSel = "ExSel", o.Insert = "Insert", o.Paste = "Paste", o.Redo = "Redo", o.Undo = "Undo", o.Accept = "Accept", o.Again = "Again", o.Attn = "Attn", o.Cancel = "Cancel", o.ContextMenu = "ContextMenu", o.Escape = "Escape", o.Execute = "Execute", o.Find = "Find", o.Finish = "Finish", o.Help = "Help", o.Pause = "Pause", o.Play = "Play", o.Props = "Props", o.Select = "Select", o.ZoomIn = "ZoomIn", o.ZoomOut = "ZoomOut", o.BrightnessDown = "BrightnessDown", o.BrightnessUp = "BrightnessUp", o.Eject = "Eject", o.LogOff = "LogOff", o.Power = "Power", o.PowerOff = "PowerOff", o.PrintScreen = "PrintScreen", o.Hibernate = "Hibernate", o.Standby = "Standby", o.WakeUp = "WakeUp", o.AllCandidates = "AllCandidates", o.Alphanumeric = "Alphanumeric", o.CodeInput = "CodeInput", o.Compose = "Compose", o.Convert = "Convert", o.Dead = "Dead", o.FinalMode = "FinalMode", o.GroupFirst = "GroupFirst", o.GroupLast = "GroupLast", o.GroupNext = "GroupNext", o.GroupPrevious = "GroupPrevious", o.ModeChange = "ModeChange", o.NextCandidate = "NextCandidate", o.NonConvert = "NonConvert", o.PreviousCandidate = "PreviousCandidate", o.Process = "Process", o.SingleCandidate = "SingleCandidate", o.HangulMode = "HangulMode", o.HanjaMode = "HanjaMode", o.JunjaMode = "JunjaMode", o.Eisu = "Eisu", o.Hankaku = "Hankaku", o.Hiragana = "Hiragana", o.HiraganaKatakana = "HiraganaKatakana", o.KanaMode = "KanaMode", o.KanjiMode = "KanjiMode", o.Katakana = "Katakana", o.Romaji = "Romaji", o.Zenkaku = "Zenkaku", o.ZenkakuHanaku = "ZenkakuHanaku", o.F1 = "F1", o.F2 = "F2", o.F3 = "F3", o.F4 = "F4", o.F5 = "F5", o.F6 = "F6", o.F7 = "F7", o.F8 = "F8", o.F9 = "F9", o.F10 = "F10", o.F11 = "F11", o.F12 = "F12", o.F13 = "F13", o.F14 = "F14", o.F15 = "F15", o.F16 = "F16", o.F17 = "F17", o.F18 = "F18", o.F19 = "F19", o.F20 = "F20", o.Soft1 = "Soft1", o.Soft2 = "Soft2", o.Soft3 = "Soft3", o.Soft4 = "Soft4", o.AppSwitch = "AppSwitch", o.Call = "Call", o.Camera = "Camera", o.CameraFocus = "CameraFocus", o.EndCall = "EndCall", o.GoBack = "GoBack", o.GoHome = "GoHome", o.HeadsetHook = "HeadsetHook", o.LastNumberRedial = "LastNumberRedial", o.Notification = "Notification", o.MannerMode = "MannerMode", o.VoiceDial = "VoiceDial", o.ChannelDown = "ChannelDown", o.ChannelUp = "ChannelUp", o.MediaFastForward = "MediaFastForward", o.MediaPause = "MediaPause", o.MediaPlay = "MediaPlay", o.MediaPlayPause = "MediaPlayPause", o.MediaRecord = "MediaRecord", o.MediaRewind = "MediaRewind", o.MediaStop = "MediaStop", o.MediaTrackNext = "MediaTrackNext", o.MediaTrackPrevious = "MediaTrackPrevious", o.AudioBalanceLeft = "AudioBalanceLeft", o.AudioBalanceRight = "AudioBalanceRight", o.AudioBassDown = "AudioBassDown", o.AudioBassBoostDown = "AudioBassBoostDown", o.AudioBassBoostToggle = "AudioBassBoostToggle", o.AudioBassBoostUp = "AudioBassBoostUp", o.AudioBassUp = "AudioBassUp", o.AudioFaderFront = "AudioFaderFront", o.AudioFaderRear = "AudioFaderRear", o.AudioSurroundModeNext = "AudioSurroundModeNext", o.AudioTrebleDown = "AudioTrebleDown", o.AudioTrebleUp = "AudioTrebleUp", o.AudioVolumeDown = "AudioVolumeDown", o.AudioVolumeMute = "AudioVolumeMute", o.AudioVolumeUp = "AudioVolumeUp", o.MicrophoneToggle = "MicrophoneToggle", o.MicrophoneVolumeDown = "MicrophoneVolumeDown", o.MicrophoneVolumeMute = "MicrophoneVolumeMute", o.MicrophoneVolumeUp = "MicrophoneVolumeUp", o.TV = "TV", o.TV3DMode = "TV3DMode", o.TVAntennaCable = "TVAntennaCable", o.TVAudioDescription = "TVAudioDescription", o.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown", o.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp", o.TVContentsMenu = "TVContentsMenu", o.TVDataService = "TVDataService", o.TVInput = "TVInput", o.TVInputComponent1 = "TVInputComponent1", o.TVInputComponent2 = "TVInputComponent2", o.TVInputComposite1 = "TVInputComposite1", o.TVInputComposite2 = "TVInputComposite2", o.TVInputHDMI1 = "TVInputHDMI1", o.TVInputHDMI2 = "TVInputHDMI2", o.TVInputHDMI3 = "TVInputHDMI3", o.TVInputHDMI4 = "TVInputHDMI4", o.TVInputVGA1 = "TVInputVGA1", o.TVMediaContext = "TVMediaContext", o.TVNetwork = "TVNetwork", o.TVNumberEntry = "TVNumberEntry", o.TVPower = "TVPower", o.TVRadioService = "TVRadioService", o.TVSatellite = "TVSatellite", o.TVSatelliteBS = "TVSatelliteBS", o.TVSatelliteCS = "TVSatelliteCS", o.TVSatelliteToggle = "TVSatelliteToggle", o.TVTerrestrialAnalog = "TVTerrestrialAnalog", o.TVTerrestrialDigital = "TVTerrestrialDigital", o.TVTimer = "TVTimer", o.AVRInput = "AVRInput", o.AVRPower = "AVRPower", o.ColorF0Red = "ColorF0Red", o.ColorF1Green = "ColorF1Green", o.ColorF2Yellow = "ColorF2Yellow", o.ColorF3Blue = "ColorF3Blue", o.ColorF4Grey = "ColorF4Grey", o.ColorF5Brown = "ColorF5Brown", o.ClosedCaptionToggle = "ClosedCaptionToggle", o.Dimmer = "Dimmer", o.DisplaySwap = "DisplaySwap", o.DVR = "DVR", o.Exit = "Exit", o.FavoriteClear0 = "FavoriteClear0", o.FavoriteClear1 = "FavoriteClear1", o.FavoriteClear2 = "FavoriteClear2", o.FavoriteClear3 = "FavoriteClear3", o.FavoriteRecall0 = "FavoriteRecall0", o.FavoriteRecall1 = "FavoriteRecall1", o.FavoriteRecall2 = "FavoriteRecall2", o.FavoriteRecall3 = "FavoriteRecall3", o.FavoriteStore0 = "FavoriteStore0", o.FavoriteStore1 = "FavoriteStore1", o.FavoriteStore2 = "FavoriteStore2", o.FavoriteStore3 = "FavoriteStore3", o.Guide = "Guide", o.GuideNextDay = "GuideNextDay", o.GuidePreviousDay = "GuidePreviousDay", o.Info = "Info", o.InstantReplay = "InstantReplay", o.Link = "Link", o.ListProgram = "ListProgram", o.LiveContent = "LiveContent", o.Lock = "Lock", o.MediaApps = "MediaApps", o.MediaAudioTrack = "MediaAudioTrack", o.MediaLast = "MediaLast", o.MediaSkipBackward = "MediaSkipBackward", o.MediaSkipForward = "MediaSkipForward", o.MediaStepBackward = "MediaStepBackward", o.MediaStepForward = "MediaStepForward", o.MediaTopMenu = "MediaTopMenu", o.NavigateIn = "NavigateIn", o.NavigateNext = "NavigateNext", o.NavigateOut = "NavigateOut", o.NavigatePrevious = "NavigatePrevious", o.NextFavoriteChannel = "NextFavoriteChannel", o.NextUserProfile = "NextUserProfile", o.OnDemand = "OnDemand", o.Pairing = "Pairing", o.PinPDown = "PinPDown", o.PinPMove = "PinPMove", o.PinPToggle = "PinPToggle", o.PinPUp = "PinPUp", o.PlaySpeedDown = "PlaySpeedDown", o.PlaySpeedReset = "PlaySpeedReset", o.PlaySpeedUp = "PlaySpeedUp", o.RandomToggle = "RandomToggle", o.RcLowBattery = "RcLowBattery", o.RecordSpeedNext = "RecordSpeedNext", o.RfBypass = "RfBypass", o.ScanChannelsToggle = "ScanChannelsToggle", o.ScreenModeNext = "ScreenModeNext", o.Settings = "Settings", o.SplitScreenToggle = "SplitScreenToggle", o.STBInput = "STBInput", o.STBPower = "STBPower", o.Subtitle = "Subtitle", o.Teletext = "Teletext", o.VideoModeNext = "VideoModeNext", o.Wink = "Wink", o.ZoomToggle = "ZoomToggle", o.SpeechCorrectionList = "SpeechCorrectionList", o.SpeechInputToggle = "SpeechInputToggle", o.Close = "Close", o.New = "New", o.Open = "Open", o.Print = "Print", o.Save = "Save", o.SpellCheck = "SpellCheck", o.MailForward = "MailForward", o.MailReply = "MailReply", o.MailSend = "MailSend", o.LaunchCalculator = "LaunchCalculator", o.LaunchCalendar = "LaunchCalendar", o.LaunchContacts = "LaunchContacts", o.LaunchMail = "LaunchMail", o.LaunchMediaPlayer = "LaunchMediaPlayer", o.LaunchMusicPlayer = "LaunchMusicPlayer", o.LaunchMyComputer = "LaunchMyComputer", o.LaunchPhone = "LaunchPhone", o.LaunchScreenSaver = "LaunchScreenSaver", o.LaunchSpreadsheet = "LaunchSpreadsheet", o.LaunchWebBrowser = "LaunchWebBrowser", o.LaunchWebCam = "LaunchWebCam", o.LaunchWordProcessor = "LaunchWordProcessor", o.LaunchApplication1 = "LaunchApplication1", o.LaunchApplication2 = "LaunchApplication2", o.LaunchApplication3 = "LaunchApplication3", o.LaunchApplication4 = "LaunchApplication4", o.LaunchApplication5 = "LaunchApplication5", o.LaunchApplication6 = "LaunchApplication6", o.LaunchApplication7 = "LaunchApplication7", o.LaunchApplication8 = "LaunchApplication8", o.LaunchApplication9 = "LaunchApplication9", o.LaunchApplication10 = "LaunchApplication10", o.LaunchApplication11 = "LaunchApplication11", o.LaunchApplication12 = "LaunchApplication12", o.LaunchApplication13 = "LaunchApplication13", o.LaunchApplication14 = "LaunchApplication14", o.LaunchApplication15 = "LaunchApplication15", o.LaunchApplication16 = "LaunchApplication16", o.BrowserBack = "BrowserBack", o.BrowserFavorites = "BrowserFavorites", o.BrowserForward = "BrowserForward", o.BrowserHome = "BrowserHome", o.BrowserRefresh = "BrowserRefresh", o.BrowserSearch = "BrowserSearch", o.BrowserStop = "BrowserStop", o.Decimal = "Decimal", o.Key11 = "Key11", o.Key12 = "Key12", o.Multiply = "Multiply", o.Add = "Add", o.Divide = "Divide", o.Subtract = "Subtract", o.Separator = "Separator"
        },
        57101: function(e, a, o) {
            var n = o(70079);
            let t = n.forwardRef(function({
                title: e,
                titleId: a,
                ...o
            }, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": a
                }, o), e ? n.createElement("title", {
                    id: a
                }, e) : null, n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                }))
            });
            a.Z = t
        },
        25260: function(e, a, o) {
            var n = o(70079);
            let t = n.forwardRef(function({
                title: e,
                titleId: a,
                ...o
            }, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: t,
                    "aria-labelledby": a
                }, o), e ? n.createElement("title", {
                    id: a
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                    clipRule: "evenodd"
                }))
            });
            a.Z = t
        }
    }
]);