import React, { FC } from "react";
import { ConfigProvider, Select as OriginalSelect, SelectProps } from "antd";

const Select: FC<Props> = ({ fontSize = 14, optionFontSize = 14, ...rest }) => {
  return (
    <ConfigProvider
      theme={{
        token: { fontSize: fontSize },
        components: { Select: { optionFontSize: optionFontSize } },
      }}
    >
      <OriginalSelect {...rest} />
    </ConfigProvider>
  );
};

export { Select };

type Props = { fontSize?: number; optionFontSize?: number } & SelectProps;
