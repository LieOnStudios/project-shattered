import { Component } from "solid-js";
import { Button } from "../components/ui/button";
import { HomeIcon, Link, Maximize, Trash, Upload } from "lucide-solid";

const Home: Component = () => {
  return (
    <>
      <div class="inline-flex gap-4 items-center">
        <Button>
          <span>Primary</span>
        </Button>
        <Button variant="secondary">
          <span>Secondary</span>
        </Button>
        <Button variant="destructive">
          <span>Destructive</span>
        </Button>
        <Button variant="outline">
          <span>Outline</span>
        </Button>
        <Button variant="ghost">
          <span>Ghost</span>
        </Button>
      </div>
      <div class="inline-flex gap-4 items-center">
        <Button size="icon">
          <HomeIcon size={16} />
        </Button>
        <Button variant="secondary" size="icon">
          <Link size={16} />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash size={16} />
        </Button>
        <Button variant="outline" size="icon">
          <Upload size={16} />
        </Button>
        <Button variant="ghost" size="icon">
          <Maximize size={16} />
        </Button>
      </div>
    </>
  );
};

export default Home;
