import { useState } from "react";
import { supabase } from "../supabase/supabase.config";

export function BoxForm() {
  const [boxId, setBoxId] = useState("");
  const [boxName, setBoxName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data: {user}} = await supabase.auth.getUser();
      const result = await supabase.from("boxes").insert({
        name: boxName,
        box_id: boxId,
        userId: user.id,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="boxId"
          id=""
          onChange={(e) => setBoxId(e.target.value)}
        />
        <input
          type="text"
          name="boxName"
          placeholder="Nombre de tu alcancía"
          onChange={(e) => setBoxName(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
