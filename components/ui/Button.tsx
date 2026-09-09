import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

function getClasses(className?: string) {
  return ["rounded-full transition", className].filter(Boolean).join(" ");
}

function isAnchorProps(props: ButtonProps): props is ButtonAsAnchor {
  return "href" in props && Boolean(props.href);
}

export default function Button(props: ButtonProps) {
  const classes = getClasses(props.className);

  if (isAnchorProps(props)) {
    const { className, children, href, ...anchorProps } = props;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { className, children, ...buttonProps } = props;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
