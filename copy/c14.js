/* Copy · frame 14 (56.85 → 61.95 s): the holding shape IMMERSIVE MODE / ACTIVATED: (top left), JUNE 2025 / 2 PATIENT CASES
   / CAME TO LIFE / WITH APPLE / VISION PRO on the left (the board's line breaks; v1 stopped at CAME TO LIFE), and the Apple
   Vision Pro creative at the lower right in its frame. v1's wording, styles and moves (index.html, frame 14: the holding
   shape wipes open, its lines swipe in, the left lines swipe in, the picture scales up from 0.7 about its bottom-right
   corner with back.out and then pushes in slowly), placed in 3D in hold 14's view and timed from the hold: every time
   below is read from V.holds[14].
   The camera (G3 since the user's 21:50 rule "never stop"): hold 14 is a pass-through, slow window 60.35–61.4, key 60.95.
   It swings in fast (~12 u/s, turning up to ~50°/s at 59.5), slows to ~2.6 u/s at the key while the sphere stops on its
   spot (60.45–61.05), then orbits off round the sphere's left (turning 40–70°/s) as it rolls down to the left.
   · Fitted to board 14 (measured at 1920 px): each line's ink left edge, cap centre and ink width (the kit sizes the bold
     lines from their width; the two Light lines from their cap height, with a little tracking to their width). ACTIVATED
     is ExtraBold and its colon Regular (the board's dots are 10 px). The holding shape is 596 × 296 centred on (362, 190.4)
     in c07's holdBg, flowing, locked to the board at the key instant. The picture's frame sits on the board's outer edges
     (958–1859.5 × 558.5–1045.5; radius 88, a 13 px frame) in the same orange / violet frame gradient; the picture is v1's
     placeholder (assets/copy/vision-pro.jpg), grown ~2.5% to cover the frame.
   · Depth ("lines in layers"): three layers from hold 14's camera, all behind the sphere (11.45) and in front of the set's
     shapes behind the copy: the picture nearest (15) as it builds, the holding shape (17.5), the left lines (20); across
     the key the picture moves back onto the left lines' plane (see Out).
   · The user (21:50): "when the text and images come in, we want to stagger the animations from left to right. So the text
     panel, then the lower-left text, and then the images on the right." Build, as the camera swings in and slows, each a
     beat after the last and each pushing forward out of the depth as it builds (3 units):
       the holding shape wipes open at key − 1.5 (its lines swipe in from + 0.1, 0.1 apart);
       the left lines swipe in from key − 1.15 (0.08 apart);
       the picture scales up from key − 0.8 (0.75 s).
     All are in and at rest by the key instant (the board's layout there, within a px or two).
   · They float (c13's float3d(): a slow hover in 3D, zero at the key instant). While the camera swings in, their place
     rides most of the way in the camera's view (0.92 to key − 0.3) and half their turn (so the swing shows them in
     perspective, turning flat as it lands): in a pure world place the holding shape would still be 400–700 px off the
     left edge as it wipes open. After the key the words keep riding (0.88) through the stop, so they read on; the picture
     lets go of the camera's place over the half second after the key (0 by key + 0.5), so it settles into the world with
     the set, but keeps 0.3 of its turn (it follows the camera a little, so the orbit never shows it edge-on).
   · Out: none (user, 00:30: no transition-outs; the camera move hides the copy). At the camera's GO (hold end − 0.15,
     61.25) the words come to rest in the world where they are (c13's leaveInWorld(): they ride a stand-in camera that
     slows to a stop over 0.4 s, so no jump), and the orbit carries them up and off the top left at full strength (the
     holding shape by ~62.25, the left lines by ~63.1). The picture sits just behind the sphere, which the orbit turns
     round, so in place it would never leave: it turned edge-on and hung as a thin sliver at the top of the frame
     (~62.4–63.3) until frame 15's copy came in. So across the key it moves back along its own view ray onto the left
     lines' plane, 15 → 20 units (its scale following, so the key view is unchanged), and the orbit carries the picture
     and the words off together, as one block: the sphere still rolls in front of it (~61.75–61.9, below), then it goes
     up and off the top left beside the words, still reading as a picture (~63.2; its corner only touches VISION PRO's
     end at the top edge, ~62.7–63.05). (Review, 01:30: at 26 units it slid under the words for ~1 s and shrank away;
     at 20–22 without the turn it went edge-on, a thin sliver at the top, 62.6–63.1.) The orbit would later bring both
     back past the lens (~64), so the layers end at key + 2.55 (63.5), off screen, before frame 15's copy (from 63.33,
     at the top left) is in view.
   · The sphere passes IN FRONT of the picture (decision 5a: "fun to see the sphere pass in front for a transition"): it is
     nearer than the picture, so its silhouette is cut out of the picture each frame (see the end of this file). It happens
     twice now: as the big sphere comes down onto its spot while the picture builds (~60.15–60.5), and as it rolls off down
     to the left while the camera orbits round (~61.75–61.9). */
import { kit, holdBg, HOLD_FRAME, contentFor, grow, watchPic, picCss } from './c07.js';
import { float3d, ramp, leaveInWorld } from './c13.js';

// board 14 (1920 px). Lines: ink left L, cap centre cy, ink width W; the two Light lines also their cap height H (the board
// sets them ~3–5% smaller than New Hero's own spacing would, with a little tracking, so the kit sizes them by H).
const BOX = { c: [362, 190.4], w: 596, h: 296 };
const HOLD_LINES = [{ text: 'IMMERSIVE MODE', w: 'l', L: 132, cy: 150, W: 440, H: 35.6 }, { text: 'ACTIVATED', w: 'b', L: 127.1, cy: 234, W: 466.1 }];
const LEFT_LINES = [{ text: 'JUNE 2025', w: 'l', L: 72.5, cy: 433.1, W: 314, H: 44.55 }, { text: '2 PATIENT CASES', w: 'b', L: 73.1, cy: 503.9, W: 579.8 },
  { text: 'CAME TO LIFE', w: 'b', L: 73, cy: 576.6, W: 471.3 }, { text: 'WITH APPLE', w: 'b', L: 71.3, cy: 650.8, W: 428.6 },
  { text: 'VISION PRO', w: 'b', L: 70.4, cy: 725.9, W: 408.3 }];
// the picture's frame: outer edges, frame width, outer corner radius
const PIC = { x: [958, 1859.5], y: [558.5, 1045.5], fw: 13, r: 88, src: 'assets/copy/vision-pro.jpg' };

export default V => {
  const { holds, copyTL, anim } = V;
  const h = holds[14];
  if (!h) throw new Error('c14: frame 14 needs a hold');
  const K = kit(V), tk = h.tk, TX = contentFor(V, 14);              // (TX: frame 14's words and picture from content/copy.json)
  V.waitFor(document.fonts.load('400 100px "new-hero"'));           // (the colon's weight)
  const D = h.depth, DP = D + 3.5, DB = D + 6, DL = D + 8.5;         // picture 15 · holding shape 17.5 · left lines 20

  /* --- the holding shape (its box and lines in one layer) --- */
  const PAD = 32, bx = [BOX.c[0] - BOX.w / 2 - PAD, BOX.c[1] - BOX.h / 2 - PAD, BOX.w + 2 * PAD, BOX.h + 2 * PAD];
  const badge = K.layer(14, bx, DB); badge.el.dataset.cp = 'c14-badge';
  const panel = document.createElement('div'); panel.className = 'hold box';
  panel.style.cssText = `left:${PAD}px;top:${PAD}px;width:${BOX.w}px;height:${BOX.h}px;background:${holdBg(0)}`;
  badge.el.appendChild(panel);
  const hS = HOLD_LINES.map((s, i) => TX.spec('panel', i, s, i === 1 ? '**ACTIVATED**:' : undefined));
  const hImm = hS.map(s => K.line(badge, s));
  if (!hS[1].edit) {
    const colon = document.createElement('span'); colon.style.fontWeight = '400'; colon.textContent = ':';
    hImm[1].appendChild(colon);                                       // ACTIVATED's colon, Regular, right after the D (no tracking)
  } else for (const k of hImm[1].children) if (k.textContent === ':') k.style.fontWeight = '400';   // (an edited line: a lone colon stays Regular)
  grow(K.ready, { el: panel, box: [BOX.c[0] - BOX.w / 2, BOX.c[1] - BOX.h / 2, BOX.w, BOX.h], lines: hImm, refit: K.refit });

  /* --- the left lines, one layer --- */
  const left = K.layer(14, [40, 380, 700, 400], DL); left.el.dataset.cp = 'c14-left';
  const l14 = LEFT_LINES.map((s, i) => K.line(left, TX.spec('lines', i, s)));

  /* --- the picture, a layer in front --- */
  const [px0, px1] = PIC.x, [py0, py1] = PIC.y, pw = px1 - px0, ph = py1 - py0;
  const pic = K.layer(14, [px0, py0, pw, ph], DP); pic.el.dataset.cp = 'c14-pic';
  const frame = document.createElement('div'); frame.className = 'img';
  frame.style.cssText = `position:absolute;left:0;top:0;width:${pw}px;height:${ph}px;border:${PIC.fw}px solid transparent;border-radius:${PIC.r}px;overflow:hidden;background:linear-gradient(#140a2e,#140a2e) padding-box,${HOLD_FRAME}`;
  const P = TX.pic('vision-pro', { src: PIC.src, fit: 'cover' });
  const img = document.createElement('img'); img.src = P.src; img.alt = ''; watchPic(V, img, P);
  img.style.cssText = P.edited ? `width:100%;height:100%;object-fit:${P.fit};object-position:${P.focus};display:block` : 'width:100%;height:100%;object-fit:cover;object-position:50% 50%;display:block';
  frame.appendChild(img); pic.el.appendChild(frame);
  V.waitFor(img.decode().catch(() => {}));                            // the first render waits for the picture

  /* --- timing, from the key instant: left to right (the user), every entrance at rest by the key --- */
  const TB = tk - 1.5;                                                // the holding shape's wipe (0.6 s); its lines from + 0.1
  const TL = tk - 1.15;                                               // the left lines (0.6 s, 0.08 apart: at rest by key − 0.23)
  const TP = tk - 0.8;                                                // the picture (0.75 s)
  // no exit (user, 00:30): from the camera's GO (hold end − 0.15) the words come to rest in the world where they are (c13's
  // leaveInWorld: they ride a stand-in camera that slows to a stop over TRD) and the orbit carries them up and off the top
  // left (the holding shape by ~62.25, the left lines by ~63.1); the picture is in the world from key + 0.5 and moves back
  // onto the left lines' plane across the key (below), so the orbit carries it off with them (~63.2). Later the orbit would
  // bring them back past the lens (~64), so the layers end at GONE, while all are off screen.
  const TR = h.t1 - 0.15, TRD = 0.4, GONE = tk + 2.55;                // 61.25 · 63.5
  badge.show(TB - 0.05, GONE); left.show(TL - 0.05, GONE); pic.show(TP - 0.05, GONE);

  gsap.set(panel, { autoAlpha: 0 });
  copyTL.set(panel, { autoAlpha: 1 }, TB)                            // v1's holdIn (a set, so it survives seeking)
    .fromTo(panel, { clipPath: 'inset(0% 100% 0% 0% round 70px)' }, { clipPath: 'inset(0% 0% 0% 0% round 70px)', duration: 0.6, ease: 'expo.out', immediateRender: false }, TB);
  K.swipe(hImm, TB + 0.1, 0.1, 0.6);
  K.swipe(l14, TL, 0.08, 0.6);
  gsap.set(frame, { autoAlpha: 0, scale: 0.7, transformOrigin: '100% 100%' });
  copyTL.fromTo(frame, { autoAlpha: 0, scale: 0.7 }, { autoAlpha: 1, scale: 1, duration: 0.75, ease: 'back.out(1.2)', immediateRender: false }, TP)
    // v1's slow push into the art, from just before the key instant (so the art is the board's there), gathering pace
    .fromTo(img, { scale: 1 }, { scale: 1.06, duration: GONE - (tk - 0.3), ease: 'sine.in', immediateRender: false }, tk - 0.3);
  // each pushes forward out of the depth as it builds
  [[badge, TB], [left, TL], [pic, TP]].forEach(([o, t]) => copyTL.fromTo(o, { dz: 3 }, { dz: 0, duration: tk - t, ease: 'power3.out', immediateRender: false }, t));

  // living gradient on the holding shape: the fill drifts ±5 %, board 14's colours at the key instant
  anim(t => { panel.style.background = holdBg(5 * Math.sin(6.2832 * (t - tk) / 9)); });

  /* --- the float: on the way in they ride most of the way in the camera's view; after the key the words keep riding and
     the picture's place stays in the world, turning 0.3 with the camera (so the orbit shows it in perspective, never
     edge-on) --- */
  const rideW0 = ramp([[TB, 0.92], [tk - 0.3, 0.92], [tk + 0.3, 0.88]]), rideP = ramp([[TB, 0.92], [tk, 0.92], [tk + 0.5, 0]]);
  const turnW0 = ramp([[TB, 0.6], [tk, 0.3]]), turnP = ramp([[TB, 0.6], [tk, 0.3]]);
  const rideW = t => t < TR ? rideW0(t) : 0, turnW = t => t < TR ? turnW0(t) : 0;
  float3d(V, [badge], { tk, seed: 41, amp: 5, tilt: 0.9, ride: rideW, rideQ: turnW });
  float3d(V, [left], { tk, seed: 42, amp: 5, tilt: 0.8, ride: rideW, rideQ: turnW });
  leaveInWorld(V, [badge, left], { h, ta: TR, T: TRD, b: rideW0(TR), bq: turnW0(TR) });
  float3d(V, [pic], { tk, seed: 43, amp: 6, tilt: 1.0, ride: rideP, rideQ: turnP });
  // the picture's depth, along its own view ray: DP (15) up to just before the key, DPF (20: on the left lines' plane, a
  // hair behind it, so where they touch the words draw on top) soon after it; its scale follows (depth · tanV / 540), so
  // from the key camera it looks the same at any depth. On the words' plane the orbit carries it off with them, up and off
  // the top left, instead of hanging edge-on at the top of the frame (15) or sliding under the words (26; see the header);
  // the sphere, nearer, still passes in front of it (the cut-out below reads its live depth)
  const DPF = 20, smx = x => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };
  const dP = t => DP + (DPF - DP) * smx((t - (tk - 0.2)) / 0.45);
  anim(t => { const d = dP(t); pic.depth = d; pic.k = d * h.tanV / 540; });

  /* --- the sphere rolls in FRONT of the picture (decision 5a) ---
     Whenever the sphere is between the camera and the picture's plane, its silhouette, as the live camera sees it, is
     projected onto that plane and cut out of the picture (an even-odd clip path in the frame's own px, allowing for the
     frame's entrance scale about its bottom-right corner, and seeking the copy timeline to this frame's time first, as
     renderCopy only does so after this hook): the WebGL sphere shows through, in front. The camera comes from
     the scene's onBeforeRender (set for this frame, before the copy is placed), chained after the earlier hooks (c07's and
     c13's live-camera hooks, c10's), so the picture's floated place is current; the sphere from anim's second argument. */
  const THREE = V.THREE, E = new THREE.Vector3(), B = new THREE.Vector3(), dir = new THREE.Vector3(), e1 = new THREE.Vector3(), e2 = new THREE.Vector3();
  const Pp = new THREE.Vector3(), S = new THREE.Vector3(), Q = new THREE.Vector3(), n = new THREE.Vector3();
  let now = -1, ballOn = false, ballR = 1;
  anim((t, b) => { now = t; ballOn = !!(b && b.p && !b.h); if (ballOn) { B.copy(b.p); ballR = (V.R || 1) * Math.max(0.001, b.sc ?? 1); } });
  const hole = cam => {
    if (!ballOn || now < TP || now > GONE) return 'none';
    copyTL.time(Math.max(0, now), true);                              // (renderCopy seeks it only after this hook: the frame's scale and dz must be this frame's)
    const H = pic.H, k = pic.k;
    Pp.copy(H.at(pic.at[0], pic.at[1], pic.depth)).addScaledVector(H.fwd, pic.dz);   // the layer's centre, as renderCopy places it
    n.crossVectors(H.upv, H.right);                                   // the picture plane's normal, away from the viewer
    cam.getWorldPosition(E);
    const pn = Q.copy(Pp).sub(E).dot(n);
    if (pn <= 0.1) return 'none';
    dir.copy(B).sub(E); const dist = dir.length();
    if (dist < ballR * 1.05 || dir.dot(n) >= pn) return 'none';     // the sphere must be between the camera and the picture
    dir.divideScalar(dist);
    e1.set(0, 1, 0).cross(dir); if (e1.lengthSq() < 1e-6) e1.set(1, 0, 0).cross(dir); e1.normalize(); e2.copy(dir).cross(e1);
    const rs = ballR * Math.sqrt(1 - (ballR / dist) ** 2), back = ballR * ballR / dist;   // the silhouette circle on the sphere
    const sc = Math.max(0.05, +gsap.getProperty(frame, 'scale') || 1);  // the frame's entrance scale (about its bottom-right)
    const pts = []; let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i < 48; i++) {
      const a = i / 48 * 6.2832;
      S.copy(B).addScaledVector(dir, -back).addScaledVector(e1, rs * Math.cos(a)).addScaledVector(e2, rs * Math.sin(a)).sub(E);
      const dn = S.dot(n); if (dn <= 1e-6) return 'none';
      S.multiplyScalar(pn / dn).add(E).sub(Pp);                      // onto the picture's plane, relative to its centre
      const u = pw + (pw / 2 + S.dot(H.right) / k - pw) / sc, v = ph + (ph / 2 - S.dot(H.upv) / k - ph) / sc;
      pts.push(`${u.toFixed(1)} ${v.toFixed(1)}`);
      x0 = Math.min(x0, u); x1 = Math.max(x1, u); y0 = Math.min(y0, v); y1 = Math.max(y1, v);
    }
    if (x1 < 0 || x0 > pw || y1 < 0 || y0 > ph) return 'none';
    return `path(evenodd,"M-40 -40H${(pw + 40).toFixed(1)}V${(ph + 40).toFixed(1)}H-40Z M${pts.join('L')}Z")`;
  };
  const prevHook = V.scene.onBeforeRender;
  V.scene.onBeforeRender = function (r, sc, cam, ...rest) {
    if (prevHook) prevHook.call(this, r, sc, cam, ...rest);
    const c = hole(cam);
    if (frame.style.clipPath !== c) frame.style.clipPath = c;
  };
};
