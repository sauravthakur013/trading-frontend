import React, { useEffect, useState } from "react";
import { httpGet, httpPost } from "../communication/environment";
import { useNavigate } from "react-router-dom";
import { newTab } from "../communication/environment";

function ProfilePage() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userDetails, setUserDetails] = useState<any>({});

  const getUserDetails = async () => {
    try {
      const response: any = await httpGet({ path: "auth/getUserDetails" });
      if (response?.data?.statusCode === 200) {
        setUserDetails(response.data.user);
      } else {
        localStorage.clear();
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  console.log(userDetails);

  return (
    <div
      style={{
        margin: 24,
      }}
    >
      <header
        style={{
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        <span style={{ color: "#62825D", fontWeight: 600, fontSize: 20 }}>
          Welcome,{" "}
        </span>
        {userDetails?.username}
      </header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          marginTop: 24,
        }}
      >
        <div
          style={{
            height: 200,
            width: 300,
            backgroundColor: "#B6A28E",
            borderRadius: 8,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            fontSize: 20,
            color: "white",
            padding: 8,
            fontWeight: 600,
            textAlign: "end",
            alignContent: "end",
            paddingInline: 12,
            cursor: "pointer",
          }}
          onClick={() => {
            const dataToTransfer = {
              token: localStorage.getItem("token"),
              username: localStorage.getItem("username"),
            };
            const NEWTAB = window.open(
              `${newTab}home?token=${dataToTransfer.token}&username=${dataToTransfer.username}`,
              "_blank"
            );
          }}
        >
          Visit your Dashboard
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
