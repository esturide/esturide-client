declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpeg' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.gif' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
