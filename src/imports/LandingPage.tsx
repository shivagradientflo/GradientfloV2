import svgPaths from "./svg-a0wk9jw25z";
import imgAsset from "figma:asset/e74ed57f623576498a1f0340b9ad5bdc7f657aa9.png";
import imgLandingPage from "figma:asset/650d86442a820f91b924773434726a411940b840.png";

function Frame() {
  return (
    <div className="h-[16px] relative shrink-0 w-[109.836px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109.836 16">
        <g id="Frame 46">
          <path d={svgPaths.p35b47a00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Why</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Agents</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Enterprise</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Features</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Use Cases</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5.25px] pt-[3.75px] px-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.3px]">
        <p className="leading-[normal]">Blogs</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <List />
    </div>
  );
}

function NavMain() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Nav - Main">
      <Container />
    </div>
  );
}

function DiscordLogo() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="DiscordLogo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DiscordLogo">
          <path d={svgPaths.p2f915e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-full items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <DiscordLogo />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#121212] text-[12px] text-center text-nowrap">
        <p className="leading-[1.3]">Beta Access</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-[1024px]" data-name="Nav bar">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] py-[32px] relative rounded-[inherit] w-full">
        <Frame />
        <NavMain />
        <div className="flex flex-row items-center self-stretch">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.6px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[60px] shadow-[0px_2px_4px_0px_rgba(255,255,255,0.05)] shrink-0" data-name="Background+Shadow">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[12px] text-nowrap uppercase">
        <p className="leading-[18px]">new</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[21px]">Agentic Learning Platform for Developers</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p31ca0d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.15)] content-stretch flex gap-[10px] items-center pl-[4px] pr-[8px] py-[4px] relative rounded-[60px] shrink-0" data-name="Link">
      <BackgroundShadow />
      <Container1 />
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.5)] w-full">
        <p className="leading-[normal]">Email address</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[32px] relative shrink-0 w-[249.41px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[12px] py-[6.5px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#121212] text-[12px] text-center text-nowrap">
          <p className="leading-[1.3]">Beta Access</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.15)] content-stretch flex gap-[6px] items-center p-[6px] relative rounded-[12px] shrink-0" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input />
      <Button2 />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[870px]" data-name="Main header">
      <Link6 />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[80px] min-w-full relative shrink-0 text-[0px] text-center text-white tracking-[1.28px] w-[min-content]">
        <p className="mb-0">
          <span className="font-['Geist:Bold',sans-serif] font-bold text-[56px]">{`Learning `}</span>
          <span className="font-['mac\'s_Extended_Minecraft:Regular',sans-serif] not-italic text-[42px]">Infrastructure</span>
          <span className="font-['Geist:Bold',sans-serif] font-bold text-[56px]"> </span>
        </p>
        <p className="font-['Geist:Bold',sans-serif] font-bold text-[56px]">for Engineering Teams</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[0.36px] w-[580px]">
        <p className="leading-[1.4]">Transform code activities into learning moments. Gradientflo identifies growth areas and supports improvement.</p>
      </div>
      <Form />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-center min-h-px min-w-px px-0 py-[40px] relative shrink-0 w-full">
      <div className="absolute flex h-[291.667px] items-center justify-center left-[306.23px] top-[-1197.36px] w-[1069.444px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[1069.444px] relative w-[291.667px]" data-name="Union">
            <div className="absolute inset-[-0.52%_-3.81%_-1.56%_-3.81%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313.864 1091.64">
                <g filter="url(#filter0_d_1_127)" id="Union">
                  <mask fill="white" id="path-1-inside-1_1_127">
                    <path d={svgPaths.p3f89ec00} />
                  </mask>
                  <path d={svgPaths.p2f2bf780} fill="var(--stroke-0, #FFB88C)" mask="url(#path-1-inside-1_1_127)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1091.64" id="filter0_d_1_127" width="313.864" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="5.54932" />
                    <feGaussianBlur stdDeviation="5.54932" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_127" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_127" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MainHeader />
      <div className="h-[832px] pointer-events-none relative rounded-[16px] shrink-0 w-[1248px]" data-name="Asset">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgAsset} />
        <div aria-hidden="true" className="absolute border-[#222859] border-[12px] border-solid inset-[-12px] rounded-[28px]" />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[297px] left-0 to-[#000000] top-[769px] w-[1728px]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[30px] pt-0 px-0 relative size-full" data-name="Landing page">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage} />
      <NavBar />
      <Frame1 />
    </div>
  );
}