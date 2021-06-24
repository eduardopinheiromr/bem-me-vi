import { Transition } from "react-transition-group";
import { useRef } from "react";
import { useOnScreen } from "hooks/useOnScreen";

const duration = 100;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const getTransitionStyles = (
  animationName: AnimationName,
  duration: number
) => {
  switch (animationName) {
    case "slideRightToLeft":
      return {
        entering: { opacity: 0, transform: " translate(137px,-1px)" },
        entered: {
          opacity: 1,
          transform: "translate(2px,1px)",
          transition: `linear ${duration}ms`,
        },
        exiting: {
          transition: `linear ${duration}ms`,
          transform: " translate(137px,-1px)",
        },
        exited: { opacity: 0 },
      };
    case "appear": {
      return {
        entering: { opacity: 0, transform: " scale(.9)" },
        entered: {
          opacity: 1,
          transform: "scale(1)",
          transition: `linear ${duration}ms`,
        },
        exiting: {
          transition: `linear ${duration}ms`,
          transform: " scale(.9)",
        },
        exited: { opacity: 0 },
      };
    }

    default:
      break;
  }
};

type AnimationName = "slideRightToLeft" | "appear";

type Props = {
  children: JSX.Element | JSX.Element[];
  name: AnimationName;
  duration?: number;
};

const Fade = ({ children, name, duration }: Props) => {
  const durationTime = duration ?? 300;
  const transitionStyles = getTransitionStyles(name, durationTime);

  const componentRef = useRef(null);
  const componentIsOnScreen = useOnScreen(componentRef, "-100px");

  return (
    <Transition
      in={componentIsOnScreen}
      timeout={durationTime}
      className="transition-width"
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          ref={componentRef}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
