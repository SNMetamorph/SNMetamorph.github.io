(async ()=>{
    var e = Object.defineProperty, t = (t, n)=>{
        let r = {};
        for(var i in t)e(r, i, {
            get: t[i],
            enumerable: !0
        });
        return n || e(r, Symbol.toStringTag, {
            value: `Module`
        }), r;
    }, n = `/assets/imagequant_bg-BcMVf2Ny.wasm`, r = async (e = {}, t)=>{
        let n;
        if (t.startsWith(`data:`)) {
            let r = t.replace(/^data:.*?base64,/, ``), i;
            if (typeof Buffer == `function` && typeof Buffer.from == `function`) i = Buffer.from(r, `base64`);
            else if (typeof atob == `function`) {
                let e = atob(r);
                i = new Uint8Array(e.length);
                for(let t = 0; t < e.length; t++)i[t] = e.charCodeAt(t);
            } else throw Error(`Cannot decode base64-encoded data URL`);
            n = await WebAssembly.instantiate(i, e);
        } else {
            let r = await fetch(t), i = r.headers.get(`Content-Type`) || ``;
            if (`instantiateStreaming` in WebAssembly && i.startsWith(`application/wasm`)) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                let t = await r.arrayBuffer();
                n = await WebAssembly.instantiate(t, e);
            }
        }
        return n.instance.exports;
    };
    let i;
    function a(e) {
        i = e;
    }
    let o = new (typeof TextDecoder > `u` ? (0, module.require)(`util`).TextDecoder : TextDecoder)(`utf-8`, {
        ignoreBOM: !0,
        fatal: !0
    });
    o.decode();
    let s = null;
    function c() {
        return (s === null || s.byteLength === 0) && (s = new Uint8Array(i.memory.buffer)), s;
    }
    function l(e, t) {
        return e >>>= 0, o.decode(c().subarray(e, e + t));
    }
    const u = Array(128).fill(void 0);
    u.push(void 0, null, !0, !1);
    let d = u.length;
    function ee(e) {
        d === u.length && u.push(u.length + 1);
        let t = d;
        return d = u[t], u[t] = e, t;
    }
    let f = 0;
    function p(e, t) {
        let n = t(e.length * 1, 1) >>> 0;
        return c().set(e, n / 1), f = e.length, n;
    }
    let m = null;
    function h() {
        return (m === null || m.byteLength === 0) && (m = new Int32Array(i.memory.buffer)), m;
    }
    function g(e) {
        return u[e];
    }
    function te(e) {
        e < 132 || (u[e] = d, d = e);
    }
    function _(e) {
        let t = g(e);
        return te(e), t;
    }
    function v(e, t) {
        if (!(e instanceof t)) throw Error(`expected instance of ${t.name}`);
        return e.ptr;
    }
    function y(e, t) {
        return e >>>= 0, c().subarray(e / 1, e / 1 + t);
    }
    var b = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, e;
        }
        free() {
            let e = this.__destroy_into_raw();
            i.__wbg_imagequant_free(e);
        }
        constructor(){
            let t = i.imagequant_new();
            return e.__wrap(t);
        }
        static new_image(e, t, n, r) {
            let a = p(e, i.__wbindgen_malloc), o = f, s = i.imagequant_new_image(a, o, t, n, r);
            return x.__wrap(s);
        }
        set_max_colors(e) {
            try {
                let n = i.__wbindgen_add_to_stack_pointer(-16);
                i.imagequant_set_max_colors(n, this.__wbg_ptr, e);
                var t = h()[n / 4 + 0];
                if (h()[n / 4 + 1]) throw _(t);
            } finally{
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_quality(e, t) {
            try {
                let r = i.__wbindgen_add_to_stack_pointer(-16);
                i.imagequant_set_quality(r, this.__wbg_ptr, e, t);
                var n = h()[r / 4 + 0];
                if (h()[r / 4 + 1]) throw _(n);
            } finally{
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_speed(e) {
            try {
                let n = i.__wbindgen_add_to_stack_pointer(-16);
                i.imagequant_set_speed(n, this.__wbg_ptr, e);
                var t = h()[n / 4 + 0];
                if (h()[n / 4 + 1]) throw _(t);
            } finally{
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        set_min_posterization(e) {
            try {
                let n = i.__wbindgen_add_to_stack_pointer(-16);
                i.imagequant_set_min_posterization(n, this.__wbg_ptr, e);
                var t = h()[n / 4 + 0];
                if (h()[n / 4 + 1]) throw _(t);
            } finally{
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        process(e) {
            try {
                let s = i.__wbindgen_add_to_stack_pointer(-16);
                v(e, x);
                var t = e.__destroy_into_raw();
                i.imagequant_process(s, this.__wbg_ptr, t);
                var n = h()[s / 4 + 0], r = h()[s / 4 + 1], a = h()[s / 4 + 2];
                if (h()[s / 4 + 3]) throw _(a);
                var o = y(n, r).slice();
                return i.__wbindgen_free(n, r * 1), o;
            } finally{
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
    }, x = class e {
        static __wrap(t) {
            t >>>= 0;
            let n = Object.create(e.prototype);
            return n.__wbg_ptr = t, n;
        }
        __destroy_into_raw() {
            let e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, e;
        }
        free() {
            let e = this.__destroy_into_raw();
            i.__wbg_imagequantimage_free(e);
        }
        constructor(t, n, r, a){
            let o = p(t, i.__wbindgen_malloc), s = f, c = i.imagequantimage_new(o, s, n, r, a);
            return e.__wrap(c);
        }
    };
    function S(e, t) {
        return ee(Error(l(e, t)));
    }
    function C(e, t) {
        throw Error(l(e, t));
    }
    var w = t({
        __wbg_imagequant_free: ()=>O,
        __wbg_imagequantimage_free: ()=>E,
        __wbindgen_add_to_stack_pointer: ()=>ut,
        __wbindgen_free: ()=>dt,
        __wbindgen_malloc: ()=>lt,
        imagequant_new: ()=>k,
        imagequant_new_image: ()=>A,
        imagequant_process: ()=>F,
        imagequant_set_max_colors: ()=>j,
        imagequant_set_min_posterization: ()=>P,
        imagequant_set_quality: ()=>M,
        imagequant_set_speed: ()=>N,
        imagequantimage_new: ()=>D,
        lodepng_add_itext: ()=>fe,
        lodepng_add_text: ()=>ue,
        lodepng_auto_choose_color: ()=>$,
        lodepng_buffer_file: ()=>Ze,
        lodepng_can_have_alpha: ()=>ie,
        lodepng_chunk_ancillary: ()=>ye,
        lodepng_chunk_append: ()=>Te,
        lodepng_chunk_check_crc: ()=>Ce,
        lodepng_chunk_create: ()=>pe,
        lodepng_chunk_data: ()=>Se,
        lodepng_chunk_data_const: ()=>_e,
        lodepng_chunk_generate_crc: ()=>we,
        lodepng_chunk_length: ()=>me,
        lodepng_chunk_next: ()=>ve,
        lodepng_chunk_next_const: ()=>ct,
        lodepng_chunk_private: ()=>be,
        lodepng_chunk_safetocopy: ()=>xe,
        lodepng_chunk_type: ()=>he,
        lodepng_chunk_type_equals: ()=>ge,
        lodepng_clear_itext: ()=>de,
        lodepng_clear_text: ()=>le,
        lodepng_color_mode_cleanup: ()=>De,
        lodepng_color_mode_copy: ()=>ke,
        lodepng_color_mode_equal: ()=>Oe,
        lodepng_color_mode_init: ()=>Ee,
        lodepng_color_profile_init: ()=>at,
        lodepng_compress_settings_init: ()=>Pe,
        lodepng_convert: ()=>Ve,
        lodepng_crc32: ()=>Ie,
        lodepng_decode: ()=>Ue,
        lodepng_decode24: ()=>Ke,
        lodepng_decode24_file: ()=>Ye,
        lodepng_decode32: ()=>Ge,
        lodepng_decode32_file: ()=>Je,
        lodepng_decode_file: ()=>qe,
        lodepng_decode_memory: ()=>We,
        lodepng_decoder_settings_init: ()=>Xe,
        lodepng_decompress_settings_init: ()=>Fe,
        lodepng_default_compress_settings: ()=>ot,
        lodepng_default_decompress_settings: ()=>st,
        lodepng_encode: ()=>et,
        lodepng_encode24: ()=>W,
        lodepng_encode24_file: ()=>q,
        lodepng_encode32: ()=>U,
        lodepng_encode32_file: ()=>K,
        lodepng_encode_file: ()=>G,
        lodepng_encode_memory: ()=>rt,
        lodepng_encoder_settings_init: ()=>it,
        lodepng_error_text: ()=>H,
        lodepng_filesize: ()=>nt,
        lodepng_free: ()=>R,
        lodepng_get_bpp: ()=>Y,
        lodepng_get_bpp_lct: ()=>J,
        lodepng_get_channels: ()=>X,
        lodepng_get_color_profile: ()=>tt,
        lodepng_get_raw_size: ()=>ae,
        lodepng_get_raw_size_lct: ()=>oe,
        lodepng_has_palette_alpha: ()=>re,
        lodepng_info_cleanup: ()=>Re,
        lodepng_info_copy: ()=>ze,
        lodepng_info_init: ()=>Le,
        lodepng_info_swap: ()=>Be,
        lodepng_inspect: ()=>He,
        lodepng_is_alpha_type: ()=>Q,
        lodepng_is_greyscale_type: ()=>Z,
        lodepng_is_palette_type: ()=>ne,
        lodepng_load_file: ()=>Qe,
        lodepng_malloc: ()=>I,
        lodepng_palette_add: ()=>ce,
        lodepng_palette_clear: ()=>se,
        lodepng_realloc: ()=>L,
        lodepng_save_file: ()=>$e,
        lodepng_state_cleanup: ()=>B,
        lodepng_state_copy: ()=>V,
        lodepng_state_init: ()=>z,
        lodepng_zlib_compress: ()=>Me,
        lodepng_zlib_decompress: ()=>Ae,
        memory: ()=>T,
        zlib_compress: ()=>Ne,
        zlib_decompress: ()=>je
    });
    URL = globalThis.URL;
    const { memory: T, __wbg_imagequantimage_free: E, imagequantimage_new: D, __wbg_imagequant_free: O, imagequant_new: k, imagequant_new_image: A, imagequant_set_max_colors: j, imagequant_set_quality: M, imagequant_set_speed: N, imagequant_set_min_posterization: P, imagequant_process: F, lodepng_malloc: I, lodepng_realloc: L, lodepng_free: R, lodepng_state_init: z, lodepng_state_cleanup: B, lodepng_state_copy: V, lodepng_error_text: H, lodepng_encode32: U, lodepng_encode24: W, lodepng_encode_file: G, lodepng_encode32_file: K, lodepng_encode24_file: q, lodepng_get_bpp_lct: J, lodepng_get_bpp: Y, lodepng_get_channels: X, lodepng_is_greyscale_type: Z, lodepng_is_alpha_type: Q, lodepng_is_palette_type: ne, lodepng_has_palette_alpha: re, lodepng_can_have_alpha: ie, lodepng_get_raw_size: ae, lodepng_get_raw_size_lct: oe, lodepng_palette_clear: se, lodepng_palette_add: ce, lodepng_clear_text: le, lodepng_add_text: ue, lodepng_clear_itext: de, lodepng_add_itext: fe, lodepng_chunk_create: pe, lodepng_chunk_length: me, lodepng_chunk_type: he, lodepng_chunk_type_equals: ge, lodepng_chunk_data_const: _e, lodepng_chunk_next: ve, lodepng_chunk_ancillary: ye, lodepng_chunk_private: be, lodepng_chunk_safetocopy: xe, lodepng_chunk_data: Se, lodepng_chunk_check_crc: Ce, lodepng_chunk_generate_crc: we, lodepng_chunk_append: Te, lodepng_color_mode_init: Ee, lodepng_color_mode_cleanup: De, lodepng_color_mode_equal: Oe, lodepng_color_mode_copy: ke, lodepng_zlib_decompress: Ae, zlib_decompress: je, lodepng_zlib_compress: Me, zlib_compress: Ne, lodepng_compress_settings_init: Pe, lodepng_decompress_settings_init: Fe, lodepng_crc32: Ie, lodepng_info_init: Le, lodepng_info_cleanup: Re, lodepng_info_copy: ze, lodepng_info_swap: Be, lodepng_convert: Ve, lodepng_inspect: He, lodepng_decode: Ue, lodepng_decode_memory: We, lodepng_decode32: Ge, lodepng_decode24: Ke, lodepng_decode_file: qe, lodepng_decode32_file: Je, lodepng_decode24_file: Ye, lodepng_decoder_settings_init: Xe, lodepng_buffer_file: Ze, lodepng_load_file: Qe, lodepng_save_file: $e, lodepng_encode: et, lodepng_get_color_profile: tt, lodepng_auto_choose_color: $, lodepng_filesize: nt, lodepng_encode_memory: rt, lodepng_encoder_settings_init: it, lodepng_color_profile_init: at, lodepng_default_compress_settings: ot, lodepng_default_decompress_settings: st, lodepng_chunk_next_const: ct, __wbindgen_malloc: lt, __wbindgen_add_to_stack_pointer: ut, __wbindgen_free: dt } = await r({
        "./imagequant_bg.js": {
            __wbindgen_error_new: S,
            __wbindgen_throw: C
        }
    }, n);
    a(w), self.onmessage = (e)=>{
        let { imageData: t, qualityMin: n, qualityMax: r, speed: i, maxColors: a } = e.data;
        try {
            let e = new x(new Uint8Array(t.data.buffer), t.width, t.height, 0), o = new b;
            o.set_quality(n, r), o.set_speed(i), o.set_max_colors(a);
            let s = o.process(e);
            o.free(), self.postMessage({
                type: `result`,
                pngBytes: s.buffer
            }, {
                transfer: [
                    s.buffer
                ]
            });
        } catch (e) {
            self.postMessage({
                type: `error`,
                message: e instanceof Error ? e.message : `Unknown compression error`
            });
        }
    };
})();
