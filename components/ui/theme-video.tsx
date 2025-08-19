import { useTheme } from "next-themes";

interface ThemeVideoProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  ref?: React.Ref<HTMLVideoElement>;
  src: {
    light: string;
    dark: string;
  };
}

function ThemeVideo({ src, ref, ...props }: ThemeVideoProps) {
  const { theme } = useTheme();

  return (
    <video ref={ref} key={theme} {...props}>
      <source
        src={theme === "light" ? src.light : src.dark}
        type="video/webm"
      />
    </video>
  );
}

export { ThemeVideo };
