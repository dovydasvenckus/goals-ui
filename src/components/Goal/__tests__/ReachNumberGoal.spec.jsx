import { describe, it, expect } from "vitest";
import ReachNumberGoal from "../ReachNumberGoal";
import { render, screen } from "@testing-library/react";

describe("ReachNumberGoal", () => {
  it("should render component with zero progress", () => {
    render(
      <ReachNumberGoal
        name={"zero progress"}
        data={{ entries: [{ date: "2022-11-27", value: 5 }], from: 5, to: 10 }}
      />
    );

    const title = screen.queryByText("zero progress");
    expect(title).toBeVisible();
    expect(title).toHaveClass("title");

    const progressBar = screen.queryByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveClass("is-danger");
    expect(progressBar).toHaveProperty("value", 0);
    expect(progressBar).toHaveProperty("max", 100);

    const progressText = screen.queryByText("0.00/5.00");
    expect(progressText).toBeVisible();
  });

  it("should render component when half way", () => {
    render(
      <ReachNumberGoal
        name={"Half way"}
        data={{
          entries: [{ date: "2022-11-27", value: 7.5 }],
          from: 5,
          to: 10,
        }}
      />
    );

    const title = screen.queryByText("Half way");
    expect(title).toBeVisible();
    expect(title).toHaveClass("title");

    const progressBar = screen.queryByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveClass("is-primary");
    expect(progressBar).toHaveProperty("value", 50);
    expect(progressBar).toHaveProperty("max", 100);

    const progressText = screen.queryByText("2.50/5.00");
    expect(progressText).toBeVisible();
  });

  it("should render component when completed", () => {
    render(
      <ReachNumberGoal
        name={"Completed"}
        data={{
          entries: [{ date: "2022-11-27", value: 10 }],
          from: 5,
          to: 10,
        }}
      />
    );

    const title = screen.queryByText("Completed");
    expect(title).toBeVisible();
    expect(title).toHaveClass("title");

    const progressBar = screen.queryByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveClass("is-success");
    expect(progressBar).toHaveProperty("value", 100);
    expect(progressBar).toHaveProperty("max", 100);

    const progressText = screen.queryByText("5.00/5.00");
    expect(progressText).toBeVisible();
  });

  it("should render component when goal is smaller than start value", () => {
    render(
      <ReachNumberGoal
        name={"Completed"}
        data={{
          entries: [{ date: "2022-11-27", value: 5 }],
          from: 10,
          to: 5,
        }}
      />
    );

    const title = screen.queryByText("Completed");
    expect(title).toBeVisible();
    expect(title).toHaveClass("title");

    const progressBar = screen.queryByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveClass("is-success");
    expect(progressBar).toHaveProperty("value", 100);
    expect(progressBar).toHaveProperty("max", 100);

    const progressText = screen.queryByText("5.00/5.00");
    expect(progressText).toBeVisible();
  });

  it("should render component when goal is past done", () => {
    render(
      <ReachNumberGoal
        name={"Completed"}
        data={{
          entries: [{ date: "2022-11-27", value: 4 }],
          from: 10,
          to: 5,
        }}
      />
    );

    const title = screen.queryByText("Completed");
    expect(title).toBeVisible();
    expect(title).toHaveClass("title");

    const progressBar = screen.queryByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveClass("is-success");
    expect(progressBar).toHaveProperty("value", 100);
    expect(progressBar).toHaveProperty("max", 100);

    const progressText = screen.queryByText("4.00/5.00");
    expect(progressText).toBeVisible();
  });
});
