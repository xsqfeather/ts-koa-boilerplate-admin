import * as React from "react";
import { BulkUpdateButtonProps, BulkUpdateButton } from "react-admin";
import { VisibilityOff } from "@material-ui/icons";

const toPublish = { isPublished: true };

export const PublishManyButton = (
  props: BulkUpdateButtonProps
): JSX.Element => {
  return (
    <BulkUpdateButton
      {...props}
      label="Reset Views"
      data={toPublish}
      icon={<VisibilityOff />}
    />
  );
};
