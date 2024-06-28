"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const onKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const key = event.key || String.fromCharCode(keyCode);

    if (key === "Enter" || keyCode === 13) {
      router.push("/search/" + value);
    }
  };
  return (
    <>
      currentPage is Search
      <div>
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={{ color: "#000", marginRight: "20px" }}
        />
        keydown Enter
      </div>
    </>
  );
}
