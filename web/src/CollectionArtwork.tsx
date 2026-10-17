/** Decorative, text-free diagrams for the featured paper collections. */
export default function CollectionArtwork({ kind }: { kind: string }) {
  let artwork;

  switch (kind) {
    case "llm-basics":
      artwork = (
        <>
          {/* Stacked Transformer layers, with tokens feeding the foundation. */}
          <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M49 143V110M90 158v-27M131 143v-33" strokeOpacity=".5" strokeDasharray="3 5" />
            <path d="m25 108 65-32 65 32-65 32Z" fill="white" fillOpacity=".12" strokeOpacity=".45" />
            <path d="m25 80 65-32 65 32-65 32Z" fill="white" fillOpacity=".22" strokeOpacity=".65" />
            <path d="m25 52 65-32 65 32-65 32Z" fill="white" fillOpacity=".35" strokeOpacity=".9" />
            <path d="M25 52v56m130-56v56M90 84v56" strokeOpacity=".3" strokeDasharray="3 5" />
            <path d="m57 52 33-16 33 16-33 16Z" strokeOpacity=".7" />
          </g>
          {[[57, 52], [90, 36], [123, 52], [90, 68]].map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r="4" fill="white" fillOpacity=".95" />
          ))}
          {[[41, 143], [82, 151], [123, 143]].map(([x, y], index) => (
            <rect key={index} x={x} y={y} width="16" height="16" rx="4" fill="white" fillOpacity=".75" />
          ))}
        </>
      );
      break;
    case "llm-frontier":
      artwork = (
        <>
          {/* A router activates parallel experts and combines their outputs. */}
          <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 90h13M52 90h25M52 90C65 90 60 43 77 43M52 90c13 0 8 47 25 47" strokeOpacity=".7" />
            <path d="M111 43c30 0 15 47 39 47M111 90h39M111 137c30 0 15-47 39-47" strokeOpacity=".45" />
            <path d="m28 90 12-16 12 16-12 16Z" fill="white" fillOpacity=".45" strokeOpacity=".85" />
            <rect x="77" y="26" width="34" height="34" rx="8" fill="white" fillOpacity=".55" strokeOpacity=".9" />
            <rect x="77" y="73" width="34" height="34" rx="8" fill="white" fillOpacity=".28" strokeOpacity=".65" />
            <rect x="77" y="120" width="34" height="34" rx="8" fill="white" fillOpacity=".1" strokeOpacity=".4" strokeDasharray="3 4" />
            <path d="m87 43 5 5 9-10M87 90h14m-7-7v14" strokeOpacity=".95" />
            <path d="m146 17 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" fill="white" fillOpacity=".8" strokeOpacity=".9" />
          </g>
          <circle cx="15" cy="90" r="5" fill="white" fillOpacity=".8" />
          <circle cx="155" cy="90" r="9" fill="white" fillOpacity=".8" />
          <circle cx="155" cy="90" r="16" fill="none" stroke="white" strokeOpacity=".25" />
        </>
      );
      break;
    case "retrieval":
      artwork = (
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          {/* Search a document collection and highlight a recommended match. */}
          <rect x="22" y="35" width="74" height="105" rx="8" fill="white" fillOpacity=".08" strokeOpacity=".3" strokeWidth="2" transform="rotate(-9 59 88)" />
          <path d="M41 24h46l21 21v82a8 8 0 0 1-8 8H41a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8Z" fill="white" fillOpacity=".18" strokeOpacity=".7" strokeWidth="2.5" />
          <path d="M87 24v21h21M47 48h22M47 62h35M47 76h14" strokeOpacity=".65" strokeWidth="3" />
          <circle cx="96" cy="94" r="33" fill="white" fillOpacity=".12" strokeOpacity=".95" strokeWidth="6" />
          <path d="m120 119 26 27" strokeOpacity=".95" strokeWidth="12" />
          <path d="m81 94 10 10 20-22" strokeOpacity=".95" strokeWidth="5" />
        </g>
      );
      break;
    case "rl":
      artwork = (
        <>
          {/* A grid-world agent learns a path around obstacles to a reward. */}
          <rect x="22" y="24" width="124" height="124" rx="10" fill="white" fillOpacity=".07" stroke="white" strokeOpacity=".5" strokeWidth="2" />
          <g fill="none" stroke="white" strokeWidth="1.5" strokeOpacity=".2">
            <path d="M53 24v124M84 24v124M115 24v124M22 55h124M22 86h124M22 117h124" />
          </g>
          {[[26, 59], [88, 28], [88, 90], [57, 121]].map(([x, y], index) => (
            <rect key={index} x={x} y={y} width="23" height="23" rx="4" fill="white" fillOpacity=".35" />
          ))}
          <path d="M37 132v-31h32V70h61V54m-6 6 6-6 6 6" fill="none" stroke="white" strokeOpacity=".95" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="37" cy="132" r="9" fill="white" fillOpacity=".9" />
          <circle cx="37" cy="132" r="3" fill="white" />
          <path d="m130 27 4 8 9 1-7 7 2 9-8-5-8 5 2-9-7-7 9-1Z" fill="white" fillOpacity=".95" stroke="white" strokeOpacity=".8" strokeLinejoin="round" />
        </>
      );
      break;
    case "diffusion":
      artwork = (
        <>
          {/* Reverse diffusion: random noise resolves into a coherent image along a continuous flow. */}
          <g fill="none" stroke="white" strokeLinecap="round">
            <path d="M44 240C32 182 84 196 102 139S132 48 240 48" strokeOpacity=".05" strokeWidth="27" />
            <path d="M24 220C12 162 64 176 82 119S112 28 220 28" strokeOpacity=".22" strokeWidth="1.5" />
            <path d="M44 240C32 182 84 196 102 139S132 48 240 48" strokeOpacity=".4" strokeWidth="2" />
            <path d="M64 260C52 202 104 216 122 159S152 68 260 68" strokeOpacity=".18" strokeWidth="1.5" />
          </g>
          {Array.from({ length: 36 }, (_, index) => {
            const size = 2 + (index * 7 % 5);
            return <rect key={index} x={9 + index % 6 * 8 + index * 3 % 5} y={113 + Math.floor(index / 6) * 9 + index * 7 % 5}
              width={size} height={size} rx="1" fill="white" fillOpacity={.2 + (index * 11 % 7) * .1} />;
          })}
          <rect x="49" y="73" width="47" height="47" rx="6" fill="white" fillOpacity=".06" stroke="white" strokeOpacity=".3" strokeDasharray="2 4" />
          {[[57, 81], [81, 81], [65, 89], [57, 97], [65, 97], [81, 97], [57, 105], [65, 105], [73, 105], [81, 105]].map(([x, y], index) => (
            <rect key={index} x={x} y={y} width="6" height="6" rx="1" fill="white" fillOpacity={index > 5 ? .7 : .35} />
          ))}
          <rect x="98" y="20" width="56" height="56" rx="8" fill="white" fillOpacity=".15" stroke="white" strokeOpacity=".9" strokeWidth="2.5" />
          <path d="m105 65 14-20 10 11 8-10 10 19Z" fill="white" fillOpacity=".45" stroke="white" strokeOpacity=".85" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="138" cy="35" r="5" fill="white" fillOpacity=".95" />
        </>
      );
      break;
    case "post-training":
      artwork = (
        <>
          <g stroke="white" strokeLinejoin="round">
            <path d="m28 111 61-35 65 36-61 36Z" fill="white" fillOpacity=".07" strokeOpacity=".2" />
            <path d="m28 95 61-35 65 36-61 36Z" fill="white" fillOpacity=".12" strokeOpacity=".36" />
            <path d="m28 79 61-35 65 36-61 36Z" fill="white" fillOpacity=".2" strokeOpacity=".7" />
            <path d="m43 71 64 36M59 62l64 36M74 53l64 36M43 87l61-35M59 96l61-35M75 105l61-35" fill="none" strokeOpacity=".28" />
            <path d="m39 40 19-11 65 36-19 11Z" fill="white" fillOpacity=".6" strokeOpacity=".8" />
            <path d="m103 39 13-8 28 16-13 8Z" fill="white" fillOpacity=".85" strokeOpacity=".9" />
            <path d="M154 80v48l-61 36-65-36v-17" fill="none" strokeOpacity=".18" />
          </g>
          <path d="M22 56v14M15 63h14M150 38v10M145 43h10" stroke="white" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
        </>
      );
      break;
    case "jepa-world-models":
      artwork = (
        <>
          <rect x="18" y="49" width="57" height="83" rx="13" fill="white" fillOpacity=".09" stroke="white" strokeOpacity=".3" transform="rotate(-9 46 90)" />
          <rect x="107" y="32" width="57" height="83" rx="13" fill="white" fillOpacity=".13" stroke="white" strokeOpacity=".45" transform="rotate(8 135 73)" />
          <g fill="none" stroke="white" strokeOpacity=".4" strokeWidth="1.5">
            <path d="m30 79 25-10 6 35-29 8 23-43M30 79l31 25M123 58l24 11-10 27-22-14 32-13M123 58l14 38" />
            <path d="M70 88h37m-7-6 7 6-7 6" strokeOpacity=".85" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M46 140c24 29 66 22 83-12" strokeDasharray="3 5" strokeOpacity=".5" />
          </g>
          {[[30, 79], [55, 69], [61, 104], [32, 112], [123, 58], [147, 69], [137, 96], [115, 82]].map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? 6 : 4} fill="white" fillOpacity={index % 3 === 0 ? .9 : .45} />
          ))}
          <circle cx="89" cy="88" r="13" fill="white" fillOpacity=".08" />
        </>
      );
      break;
    case "visual-generation":
    default:
      artwork = (
        <>
          <g transform="rotate(10 101 96)" stroke="white" strokeLinejoin="round">
            <rect x="62" y="63" width="94" height="94" rx="12" fill="white" fillOpacity=".13" strokeOpacity=".65" />
            <path d="M85 63v94M109 63v94M132 63v94M62 87h94M62 110h94M62 134h94" fill="none" strokeOpacity=".23" />
            <path d="m73 139 22-30 16 16 15-26 20 40Z" fill="white" fillOpacity=".2" strokeOpacity=".35" />
            <circle cx="131" cy="83" r="6" fill="white" fillOpacity=".7" stroke="none" />
            <rect x="39" y="42" width="62" height="62" rx="9" fill="white" fillOpacity=".24" strokeOpacity=".75" />
            <path d="M70 42v62M39 73h62" fill="none" strokeOpacity=".5" />
            <rect x="20" y="24" width="35" height="35" rx="7" fill="white" fillOpacity=".68" strokeOpacity=".9" />
          </g>
          <path d="M29 120c-1 16 7 29 22 35m-5-10 5 10-12-1" fill="none" stroke="white" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
  }

  return <svg className="collection-art" viewBox="0 0 180 180" aria-hidden="true" focusable="false">{artwork}</svg>;
}
