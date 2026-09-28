/* Copy · frame 8 (27.25 → 32.35 s): 90+ (counts up) DB-06 TACTICS APPROVED / ON DAYS 0-5, and 150+ (counts up)
   FROM DAY 6+, at the left, and the holding shape EXPANDED HER2: ACTIVATED at the top right. v1's wording, styles and
   moves (each line swipes in, the numbers count up), placed in 3D in hold 8's view. Every time is read from hold 8, an
   ease-through since the user's 21:50 rule ("never stop"): its slow window is 28.25–29.25 and the camera passes board 8's
   exact pose at the key instant 28.75 at ~4.5 u/s, craning round from the look down on the pegs onto the wall head-on.
   · The holding shape is frame 8's own now (user, 21:50: frame 7's panel leaves off screen instead of crossing the screen
     to be reused, "and then, when we build board 8, that expanded her2 activated panel can be built in from the right
     side of the screen"). It flies in from beyond the right edge (key − 1.35, 0.95 s power3.out): it slides in along its
     plane, swung 30° away and a little deep, and turns flat to the camera as it lands; its lines swipe in as it lands
     (key − 0.85), in by ~28.3. The camera comes round onto the wall from the left, so a pure world place would creep in
     from the right edge over ~1 s (half off screen until ~28.15); on the way in its place is blended most of the way (0.8)
     toward riding in the camera's view, so the slide lands on its spot and it drifts gently there while the pegs pass
     behind. The blend changes nothing at the key instant (the camera is on board 8's exact pose) and hands back to the
     world across it.
   · The numbers are the board's: New Hero ExtraBold digits at the board's digit height and spacing, and the board's
     small, low plus (0.59 / 0.61 em, on the baseline; v1 used a full-size plus, which ran 90+ 33 px long). While
     counting, the digits are right-aligned in a box as wide as the final value's, so the plus stays put and never pushes
     into FROM DAY 6+, which is back on its board place. They build from key − 1.3 (27.45), all in by ~28.35.
   · "Lines in layers": the two numbers are a layer in front of their small lines (the numbers 25 world units from hold
     8's camera, the lines 27; the peg tips are at ~61), so the approach shows them apart in depth. (They were at 54.5 /
     58.5; the 00:30 review moved the block nearer for its leave, below, keeping the same depth ratio between them.)
   · Frame 8's one Z moment: 90+ pushes forward out of the depth as it swipes in and counts (dz 5.5: the old 12 at 54.5,
     scaled to the nearer depth so it looks the same).
   · They hover (c07's hover(): a slow float in 3D, zero at the key instant, so at 28.75 everything sits on its board
     place): the left block as one, the holding shape on its own.
   · No exit animation (user, 2026-09-28 00:30: no transition-outs; "the camera or the gradient left-to-right transition
     hides them"). Nothing fades, slides or pushes: after the key the camera rises and angles down on the pegs, and that
     move carries all of it off. Gone since v1: both recedes and both fades.
     - The left block follows the camera "somewhat" (the user's words for what he likes) and then lets go: its place is
       blended 0.6 toward riding in the camera's view through the build and the slow window (no effect at the key
       instant, where the camera is on board 8's exact pose), handed back to the world over 29.25–29.75 as the camera
       speeds out of the slow window. At its nearer depth the blend makes it move on screen about as before (with the
       pegs); once let go, the nearer depth carries it off ~2.4× faster: the numbers are gone by ~29.9, the lines by
       ~30.15 (at 54.5 / 58.5 in the pure world they crawled off until ~31.15).
     - Why (review of 1–10, after the 00:30 pass): at the old depth the rising camera dragged the numbers slowly across
       the left edge (90+ sits ~40 px from it at the key), so they read "0+" / "50+" for ~0.55 / 0.7 s: clipped client
       stats. Measured per digit now: 0.15 / 0.2 s, and 90+ / 150+ stay whole on screen as long as before (to ~29.45;
       was ~29.5). Tried and dropped: the block (or just the numbers) nearer in the pure world. That cut the misread
       only to ~0.35–0.45 s, cost ~0.35–0.4 s of reading time, and numbers alone nearer slid over their own lines.
     - The left block switches off at hold end + 1.2 (30.45), while it is off screen (30.2–30.9; from ~30.95 the lines'
       layer nears the camera plane and CSS would draw a stretched sliver). The holding shape stays in the world with no
       blend after the key and rides off the top by ~31.4; it switches off at hold end + 2.35 (31.6), once off screen,
       well before frame 9's copy (33.25). */
import { kit, holdingShape, BADGE, holdBg, hover, contentFor } from './c07.js';
const sm = x => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };

export default V => {
  const { holds, copyTL, anim } = V;
  const h8 = holds[8];
  if (!h8) throw new Error('c08: frame 8 needs a hold');
  const K = kit(V), tk = h8.tk, TX = contentFor(V, 8);             // (TX: frame 8's words from content/copy.json)
  const D8 = h8.depth - 3;                                           // the holding shape: just in front of the pegs (58.5)

  // the board's type (measured from board 8 at 1920 px). The numbers: the final value's digit ink (left edge, top,
  // baseline), their tracking (the board's digit gaps: −0.04 em) and the plus (its size as a fraction of the digits' font
  // size, and its gap after the last digit). The small lines: ink left, cap centre, ink width and cap height (the board
  // sets them a little tighter than New Hero's own spacing, so they are fitted by height (size) and width (tracking)).
  const DN = 25, DW = 27;                                            // the left block's depths: numbers, lines (see the header)
  const n90L = K.layer(8, [40, 380, 460, 220], DN);
  const n150L = K.layer(8, [60, 770, 440, 150], DN);
  const words = K.layer(8, [80, 570, 900, 330], DW);
  const n90 = K.number(n90L, TX.numSpec('numbers', 0, { digits: '90', L: 94, top: 411, base: 562, lsEm: -0.04, plusEm: 0.586, gap: 9 }));
  const n150 = K.number(n150L, TX.numSpec('numbers', 1, { digits: '150', L: 115, top: 783, base: 897, lsEm: -0.04, plusEm: 0.612, gap: 7 }));
  const fL = [K.line(words, TX.spec('lines', 0, { text: 'DB-06 TACTICS APPROVED', w: 'l', L: 104, cy: 617, W: 832, H: 51 })),
    K.line(words, TX.spec('lines', 1, { text: 'ON DAYS 0-5', w: 'l', L: 100, cy: 697, W: 394, H: 51 }))];
  const fDay = K.line(words, TX.spec('lines', 2, { text: 'FROM DAY 6+', w: 'l', L: 458, cy: 867.5, W: 324, H: 39 }));

  /* --- the holding shape: built in from the right side of the screen --- */
  const { lay: badge, panel, lines: hHer } = holdingShape(V, K, 8, BADGE.c8, BADGE.box8, D8, TX);
  const TS = tk - 1.35;                                              // the fly-in (off screen at its start)
  const fly = { x: 820, z: 5, ry: -30 };                             // board px along its plane, world units deeper, degrees (swung away)
  copyTL.fromTo(fly, { x: 820, z: 5, ry: -30 }, { x: 0, z: 0, ry: 0, duration: 0.95, ease: 'power3.out', immediateRender: false }, TS);
  K.swipe(hHer, tk - 0.85, 0.1);

  // the counters (v1: 0 → 90 and 0 → 150, power2.out, from the swipe): the tween drives the number's setter
  const counter = (sp, to, t, dur) => {
    if (!Number.isFinite(to)) return;                                // (an edited number that isn't one: shown as it is)
    const c = { v: 0, get n() { return this.v; }, set n(x) { this.v = x; sp.set(x); } };
    sp.set(0);
    copyTL.fromTo(c, { n: 0 }, { n: to, duration: dur, ease: 'power2.out', immediateRender: false }, t);
  };

  /* --- timing (v1: 90+ at f8 + 0.5, its lines + 0.8, 150+ + 1.7, FROM DAY 6+ + 2.0; here compressed, from the key) --- */
  const T = tk - 1.3;
  K.swipe([n90], T); counter(n90, n90.to, T, 0.9);
  copyTL.fromTo(n90L, { dz: 5.5 }, { dz: 0, duration: 1.0, ease: 'power3.out', immediateRender: false }, T);   // pushes forward out of the depth
  K.swipe(fL, T + 0.2, 0.1);
  K.swipe([n150], T + 0.35); counter(n150, n150.to, T + 0.35, 0.8);
  K.swipe([fDay], T + 0.5);

  /* --- hover: the left block as one (following the camera 0.6 until key + 0.5, let go by key + 1.0: see the header),
     the holding shape on its own (with its fly-in on top) --- */
  const left = [n90L, n150L, words];
  hover(V, left, { tk, seed: 21, amp: 6, tilt: 0.7, beta: t => 0.6 * (1 - sm((t - tk - 0.5) / 0.5)) });
  hover(V, [badge], { tk, seed: 22, amp: 5, tilt: 0.9, st: fly, beta: t => 0.8 * (1 - sm((t - tk + 0.3) / 0.6)) });

  /* --- out: none. The rising camera carries both off (see the header); they switch off once gone --- */
  left.forEach(o => o.show(T - 0.1, h8.t1 + 1.2));
  badge.show(TS, h8.t1 + 2.35);

  // the holding shape's living fill, locked to board 8's colours at the key instant
  anim(t => { panel.style.background = holdBg(5 * Math.sin(6.2832 * (t - tk) / 9)); });
};
