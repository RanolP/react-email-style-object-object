import { Body, Head, Html, Tailwind, Text } from "@react-email/components";
import * as React from "react";

export const VercelInviteUserEmail = () => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <style>{`p { margin: 0; }`}</style>
        </Head>
        <Body style={notImportantStyle}>
          <Text className="text-center text-lg md:text-sm">Hello</Text>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default VercelInviteUserEmail;

const notImportantStyle = {
  background: "white",
  color: "black",
};
