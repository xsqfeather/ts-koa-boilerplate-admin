import { ReactElement } from "react";
import { useTranslate, SelectArrayInput, InputProps } from "react-admin";

import segments from "../segments/data";

interface Props extends Omit<InputProps, "source"> {
  source?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SegmentsInput = ({ addField, ...rest }: Props): ReactElement => {
  const translate = useTranslate();
  return (
    <SelectArrayInput
      source="groups"
      {...rest}
      choices={segments.map((segment) => ({
        id: segment.id,
        name: translate(segment.name),
      }))}
    />
  );
};

SegmentsInput.defaultProps = {
  addField: true,
  source: "groups",
  resource: "customers",
};

export default SegmentsInput;
