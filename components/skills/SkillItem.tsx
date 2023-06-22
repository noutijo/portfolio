import { skillType } from "@/types/types"

export default function SkillItem({ data }: { data: skillType }) {
  const { title, tag, percent } = data
  return (
    <>
      <div className="flex items-center justify-between hover:scale-[1.02] transition-all duration-300 ease-out ring-style bg-colorWhite dark:bg-colorWhite_DM rounded-2xl p-4 overflow-hidden">
        <div className="left flex items-center gap-2">
          <div className="icon w-[50px] h-[50px] rounded-full bg-color flex items-center justify-center">
            <i className="bi bi-patch-check-fill text-lg text-gradient flex items-center justify-center"></i>
          </div>
          <div>
            <p className="text-color font-bold">{title}</p>
            <p className="text-color-secondary">{tag}</p>
          </div>
        </div>
        <div className="right opacity-[0.2]">
          <div className="relative w-[30px] h-[30px] rounded-full">
            <svg className="w-[30px] h-[30px]">
              <circle
                className="stroke-colorDange translate-x-1 translate-y-1 border border-colorPrimary"
                fill="none"
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray={186.6}
                strokeDashoffset={186.6 - (percent / 100) * 186.6}
                cx="30"
                cy="30"
                r="30"
              ></circle>
            </svg>

            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <p className="text-color hidden text-sm">{percent}%</p>
            </div>

            <div className="absolute top-0 left-0 w-[65px] h-[65px] rounded-full border-[4px] border-colorBgLight"></div>
          </div>
        </div>
      </div>
    </>
  )
}
