import React, { useState } from "react";
import TextBasedInput from "../../../components/UI/Form/TextBasedInput";

function AdminLoginForm() {
  // Form fields
  // TO-DO: use Formik to contrl form inputs
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // FUNCTION: Handles form submission / authenticates the admin
  async function onSubmit(e) {
    e.preventDefault();
    console.log("Hi");
  }

  return (
    <form className="mt-4 flex flex-col gap-y-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-1">
        <label className="text-sm text-slate-400">Username</label>

        <TextBasedInput
          type="text"
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-y-1">
        <label className="text-sm text-slate-400">Password</label>

        <TextBasedInput
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="h-12 w-full bg-gethsemaneRed p-3 rounded-lg text-white"
      >
        Log in
      </button>
    </form>
  );
}

export default AdminLoginForm;
