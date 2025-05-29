import { RefObject } from "react";
import styles from "./CPF.module.css";

interface CPFProps extends React.HTMLAttributes<HTMLDivElement> {
  showContent: boolean;
  ref: RefObject<HTMLDivElement | null>;
  enter: boolean;
  removeDOM: boolean;
}

export const CPF = ({
  showContent,
  className,
  enter,
  removeDOM,
  ...rest
}: CPFProps) => {
  return (
    <div
      {...rest}
      // className={`${styles.hide}  ${showContent && styles.visible}`}
      className={`${removeDOM || styles.wrapper} ${className} ${
        enter && styles.enter
      }`}
    >
      <div className={`${styles.content} ${showContent && styles.show}`}>
        {removeDOM || (
          <>
            <h2>CPF</h2>
            <ol>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </>
        )}
      </div>
    </div>
  );
};
