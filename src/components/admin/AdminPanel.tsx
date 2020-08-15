import React, { useEffect, useState } from "react";
import { IAdminPanelProps, IUserDetails } from "../../models/components.props";
import axios from "axios";
export function AdminPanel(props: IAdminPanelProps) {
  const [members, setMembers] = useState([] as IUserDetails[]);
  async function fetchMembers() {
    const { members } = await axios
      .get("/.netlify/functions/fetch-members")
      .then(({ data }) => data);
    setMembers(members);
  }
  useEffect(() => {
    fetchMembers();
  }, []);
  return (
    <div>
      <div> You're signed as an Admin</div>
      {members.map((user) => {
        return <div>{user.displayName}</div>;
      })}
    </div>
  );
}
