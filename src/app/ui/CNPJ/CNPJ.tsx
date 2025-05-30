import { RefObject } from "react";
import styles from "./CNPJ.module.css";

interface CNPJProps extends React.HTMLAttributes<HTMLDivElement> {
  showContent: boolean;
  ref: RefObject<HTMLDivElement | null>;
  enter: boolean;
  removeDOM: boolean;
}

export const CNPJ = ({
  showContent,
  className,
  removeDOM,
  enter,
  ...rest
}: CNPJProps) => {
  return (
    <div
      {...rest}
      className={`${removeDOM || styles.wrapper} ${className} ${
        enter && styles.enter
      }`}
    >
      <div className={`${styles.content} ${showContent && styles.show}`}>
        {removeDOM || (
          <>
            <h2>CNPJ</h2>
            <ol>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
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
            </ol>
          </>
        )}
      </div>
    </div>
  );
};
