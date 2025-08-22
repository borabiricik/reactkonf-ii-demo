"use client";
import { useCompletion } from "@ai-sdk/react";
import { Button, Input } from "@heroui/react";
import React from "react";

const AI = () => {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/chat",
  });
  return (
    <div className="flex flex-col-reverse gap-4 w-1/2 mx-auto">
      <div>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt"
        />
        <Button
          type="button"
          onPress={(e) => handleSubmit(e as any)}
          className="w-24 mt-4"
        >
          Send
        </Button>
      </div>
      <div>
        <div>{completion}</div>
      </div>
    </div>
  );
};

export default AI;
