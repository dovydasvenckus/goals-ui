import { describe, it, expect } from "vitest";
import ReachNumberGoal from "../ReachNumberGoal";
import { render, screen } from "@testing-library/react";

describe("ReachNumberGoal", () => {
  it("should render component correctly when zero progress", () => {
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

  it("should render component correctly when half way", () => {
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

  it("should render component correctly when completed", () => {
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
});
