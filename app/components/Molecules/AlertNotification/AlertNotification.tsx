import { Alert, AlertColor, SxProps, Theme } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { MessageAction } from "./Action";
import { Contents } from "./Contents";
import { Progress } from "./Progress";
import { useState } from "react";
import { containerStyle } from "./AlertNotification.styles";

export type AlertNotificationProps = {
  severity?: AlertColor;
  title?: string;
  description?: string;
  url?: string;
  showProgress?: boolean;
  inline?: boolean;
  actionLabel?: string;
  duration?: number;
  sx?: SxProps<Theme>;
  onClose?: () => void;
  onAction?: () => void;
};

export const iconMapping = {
  success: <CheckCircleOutlinedIcon fontSize="medium" />,
  warning: <WarningAmberOutlinedIcon fontSize="medium" />,
  error: <ErrorOutlineOutlinedIcon fontSize="medium" />,
  info: <InfoOutlinedIcon fontSize="medium" />,
};

export const AlertNotification = ({
  severity = "error",
  title,
  description,
  url,
  showProgress = false,
  inline = false,
  actionLabel = "",
  duration = 6000,
  sx,
  onClose,
  onAction,
}: AlertNotificationProps) => {
  const [playing, setPlaying] = useState(true);
  const combinedStyles = [
    ...(Array.isArray(sx) ? sx : [sx]),
    containerStyle(inline),
  ];

  return (
    <Alert
      sx={combinedStyles}
      variant="filled"
      color={severity}
      icon={iconMapping[severity]}
      onClose={onClose}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      action={
        <MessageAction
          actionLabel={actionLabel}
          url={url}
          onClose={onClose}
          onAction={onAction}
        />
      }
    >
      <Contents title={title} description={description} />
      {showProgress && (
        <Progress
          severity={severity}
          playAnimation={playing}
          inline={inline}
          duration={duration}
          onProgressEnd={onClose}
        />
      )}
    </Alert>
  );
};
