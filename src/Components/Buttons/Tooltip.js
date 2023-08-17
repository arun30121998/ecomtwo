import { Tooltip } from "@material-tailwind/react";

export function TooltipUI({handleFunction, icon, content, }) {
  return (
    <div
    onClick={handleFunction}
    >
      <Tooltip
      content={content}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
      
    >
      {icon}
    </Tooltip>
    </div>
  );
}
