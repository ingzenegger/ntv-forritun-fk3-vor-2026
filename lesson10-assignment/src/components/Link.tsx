// TODO: Make this component polymorphic.
// The `as` prop should accept any valid HTML element type (e.g. 'a', 'button', 'span').
// The remaining props should be inferred from the resolved element —
// for example, if as="a" then `href` and `target` should autocomplete,
// if as="button" then `disabled` and `type` should autocomplete.
// Default `as` to 'a' when not provided.
// `variant` should only accept 'default' | 'muted' | 'underline'.
type Variant = "default" | "muted" | "underline";

type LinkProps<E extends React.ElementType> = {
  as?: E;
  variant: Variant;
} & React.ComponentPropsWithoutRef<E>;

function Link<E extends React.ElementType = "a">({
  as,
  variant,
  children,
  className,
  ...props
}: LinkProps<E>) {
  const Component = as || "a";

  const variantStyles: Record<Variant, string> = {
    default: "text-blue-600 hover:text-blue-800",
    muted: "text-gray-500 hover:text-gray-700",
    underline: "text-blue-600 underline underline-offset-2 hover:text-blue-800",
  };

  return (
    <Component
      className={`inline-flex items-center gap-1 ${variantStyles[variant || "default"]} ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Link };
