/* Copy · frame 27 (121.15 → 125.95 s): AND THERE’S STILL SO MUCH MORE / TO PUSH FOR, and the tail art (v1's placeholder
   picture of the ENHERTU arrow in its ring, which is the logo board 27 shows) in its frame below them. v1's wording,
   weights and moves (the lines swipe in 0.3 s apart; the picture pops in, scale 0.85 → 1 with a small overshoot, and the
   art pushes slowly in), fitted to board 27 (measured at 1920 px) and placed in 3D in hold 27's view.
   · Lines: AND THERE’S STILL SO MUCH MORE is Light, cap height 45 px, from x 111; TO PUSH FOR ExtraBold, cap height
     98 px, from x 467 (sizes from the cap heights, tracking from the ink widths).
   · The picture sits on board 27's frame: 947 × 475 at 467.5, 542, corner radius 89, a 13.5 px frame that is orange down
     the sides and violet across the middle of the top and bottom (c07.js's HOLD_FRAME, the boards' shared frame). v1's
     art (assets/copy/tail-art.jpg, 913 × 407) registers on the board's picture at 1:1, but the board's frame shows a little
     more art above and below, so it is shown 1.105× about the opening's centre (v1 itself ran it 1.02 → 1.1): it just
     covers the opening, and the ring, near the centre, moves ~2–7 px.
   · 3D, three layers in front of the sphere (hold depth − 3): the lines, TO PUSH FOR on its own, and the picture 1.2
     units further back. Frame 27's depth moment: TO PUSH FOR pushes forward out of the depth as it swipes in (the push
     the line is about). Frame 27 is an ease-through (hold 123.85–125.2, key 124.5): the crane up from 25 slows into a
     truck left and passes board 27's pose at ~1.5 u/s. The layers ride half the camera's movement (c25's rideCam): exactly
     on the board at the key, hovering round it (half the parallax), so the build isn't dragged in across the frame edge
     by the crane and the copy doesn't sweep while it's read.
   · Timing, anchored on the key instant (the sphere lands in the window then): the first line swipes in at key − 1.4, as
     the crane slows (the sphere is still off the top of the frame, about to drop back down the lane), TO PUSH FOR 0.3 s
     later, the picture pops in 0.45 s after the first line; all in by ~key − 0.4. The art is at rest (the board's picture)
     until the pop has settled and the key is near (key − 0.25), then pushes gently in toward the ring, gathering pace to
     the end.
   · Exit: the one G6 keeps (user, 2026-09-28 00:30: no transition-outs "in most cases", because the camera or the wipe
     hides the copy). Here nothing does: from 27 to 28 the camera only trucks left at ~1.5 u/s (the copy drifts ~50 px/s),
     and frame 28's copy builds in on the same spot (MORE OPPORTUNITIES. over the first line from ~126.0, the bold block
     over TO PUSH FOR and the picture from ~126.2), while the sphere rolls out of the window along the sill through TO
     PUSH FOR's line (it reaches the R at ~125.3). So they leave with plain fades where they stand (v1's fades, sine.inOut,
     0.3 s; no sink and no slide, still hovering with the camera), each as late as it can: TO PUSH FOR from hold end
     − 0.05 (mostly gone as the sphere reaches it), the first line and the picture held ~0.6 s longer than before, gone
     just before frame 28's first line reveals (its start is read from hold 28, as c28.js times it). */
import { kit, HOLD_FRAME, contentFor, watchPic, picCss } from './c07.js';
import { rideCam } from './c25.js';

const RIDE = 0.5;                                                    // how much of the camera's movement the copy rides
const ART = { w: 913, h: 407, s: 1.105 };                            // v1's tail art and its scale in the frame's opening

export default V => {
  const { holds, copyTL } = V;
  const h = holds[27];
  if (!h) throw new Error('c27: frame 27 needs a hold');
  const K = kit(V), TX = contentFor(V, 27);                          // (TX: frame 27's words and picture from content/copy.json)
  const D = h.depth - 3;                                             // a little in front of the sphere and the window

  // the lines: each on its own layer (so TO PUSH FOR can push in depth). Each mask wears its text's weight, so its strut
  // is the same face as its text and the line sits exactly on its fitted place (with the page's default weight a big
  // bold line sits ~2 px low)
  const top = K.layer(27, [80, 280, 1140, 110], D);
  const push = K.layer(27, [440, 370, 960, 160], D);
  const l1 = K.line(top, TX.spec('lines', 0, { text: 'AND THERE’S STILL SO MUCH MORE', w: 'l', L: 111, W: 1079, cy: 332.5, H: 44 }));
  const l2 = K.line(push, TX.spec('lines', 1, { text: 'TO PUSH FOR', w: 'b', L: 467, W: 908, cy: 447, H: 98 }));
  l1.parentElement.style.fontWeight = 300; l2.parentElement.style.fontWeight = 800;

  // the picture (v1's #tail27) on board 27's frame: the opening is 920 × 448 from (481, 555.5); the art covers it, centred
  const PB = [447, 523, 987, 512];                                   // the layer's box (stage px), with room for the pop's overshoot
  const pic = K.layer(27, PB, D + 1.2);
  const aw = ART.w * ART.s, ah = ART.h * ART.s;
  const P = TX.pic('art', { src: 'assets/copy/tail-art.jpg', fit: 'cover' });
  pic.el.innerHTML = `<div class="img" style="position:absolute;left:${467.5 - PB[0]}px;top:${542 - PB[1]}px;width:947px;height:475px;box-sizing:border-box;border:13.5px solid transparent;border-radius:89px;overflow:hidden;background:linear-gradient(#fff,#fff) padding-box,${HOLD_FRAME}">
    <img src="${P.src}" alt="" style="${P.edited ? picCss(P, 'transform-origin:50% 50%') : `position:absolute;left:${((920 - aw) / 2).toFixed(2)}px;top:${((448 - ah) / 2).toFixed(2)}px;width:${aw.toFixed(2)}px;height:${ah.toFixed(2)}px;display:block;transform-origin:50.7% 49.4%`}"></div>`;
  const frame = pic.el.firstElementChild, art = frame.firstElementChild;
  watchPic(V, art, P);
  V.waitFor(art.decode().catch(() => {}));                          // the first render waits for the picture
  rideCam(V, [top, push, pic], h, RIDE);

  /* --- timing, from the key instant (v1: lines at f27 + 0.5 and + 0.8, the picture at + 1.1) --- */
  const T = h.tk - 1.4;
  // the exit (the one kept in G6; see the header): TO PUSH FOR as the sphere rolls out along the sill to its last letter,
  // then the first line and the picture, gone just before frame 28's first line reveals where they are
  const h28 = holds[28], N28 = h28 ? Math.max(V.win(28)[0] + 0.05, h28.t0 - 0.8) : h.t1 + 0.8;   // (c28.js's first reveal)
  const XP = h.t1 - 0.05, X = N28 - 0.45, XD = 0.3;
  const TA = Math.max(h.tk - 0.25, T + 0.45 + 0.7);                  // the art's push: once the pop has settled
  K.swipe([l1], T);
  K.swipe([l2], T + 0.3);
  copyTL.fromTo(push, { dz: 10 }, { dz: 0, duration: 1.0, ease: 'power3.out', immediateRender: false }, T + 0.3);   // TO PUSH FOR comes forward out of the depth
  gsap.set(frame, { autoAlpha: 0, scale: 0.85, transformOrigin: '50% 50%' });
  copyTL.fromTo(frame, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)', immediateRender: false }, T + 0.45)
    // v1's slow push into the art (1.02 → 1.1): here from rest, gathering pace to the end
    .fromTo(art, { scale: 1 }, { scale: 1.07, duration: X + 0.05 + XD - TA, ease: 'sine.in', immediateRender: false }, TA);

  // out: plain fades where they stand (v1's fades; no sink, no slide: user, 00:30), still hovering with the camera
  copyTL.fromTo(push.el, { autoAlpha: 1 }, { autoAlpha: 0, duration: XD, ease: 'sine.inOut', immediateRender: false }, XP)
    .fromTo(top.el, { autoAlpha: 1 }, { autoAlpha: 0, duration: XD, ease: 'sine.inOut', immediateRender: false }, X)
    .fromTo(pic.el, { autoAlpha: 1 }, { autoAlpha: 0, duration: XD, ease: 'sine.inOut', immediateRender: false }, X + 0.05);
  push.show(T - 0.1, XP + XD + 0.05);
  [top, pic].forEach(o => o.show(T - 0.1, X + 0.05 + XD + 0.05));
};
