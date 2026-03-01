"use client";

import { useEffect, useState } from "react";

// Each week is an array of 7 days (Sun–Sat), values 0–4 represent intensity levels
const contributionData: number[][] = [
    // Mar (weeks 1-4)
    [0, 2, 2, 2, 2, 2, 2], [0, 2, 3, 2, 3, 2, 0], [0, 3, 2, 2, 3, 2, 0], [0, 4, 0, 0, 3, 0, 0],
    // Apr (weeks 5-8)
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    // May (weeks 9-13)
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    // Jun (weeks 14-17)
    [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0],
    // Jul (weeks 18-21)
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    // Aug (weeks 22-26)
    [0, 1, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 0, 0], [0, 2, 0, 2, 0, 0, 0], [0, 3, 2, 1, 2, 1, 0], [0, 1, 0, 0, 0, 0, 0],
    // Sep (weeks 27-30)
    [0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 2, 1, 2, 1, 0, 0], [0, 1, 0, 1, 0, 0, 0],
    // Oct (weeks 31-35)
    [0, 1, 1, 2, 2, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 2, 1, 3, 2, 1, 0], [0, 1, 1, 1, 2, 1, 0], [0, 1, 1, 1, 0, 0, 0],
    // Nov (weeks 36-39)
    [0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    // Dec (weeks 40-43)
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    // Jan (weeks 44-48)
    [0, 2, 1, 2, 1, 1, 0], [0, 2, 1, 1, 2, 1, 0], [0, 1, 2, 2, 2, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 2, 2, 2, 1, 0],
    // Feb (weeks 49-52)
    [0, 3, 2, 3, 2, 2, 0], [0, 2, 3, 3, 2, 2, 0], [0, 4, 3, 4, 3, 2, 0], [0, 2, 2, 2, 4, 1, 0],
];

// Month labels positioned at the correct week index where each month starts
const monthLabels: { label: string; weekIndex: number }[] = [
    { label: "Mar", weekIndex: 0 },
    { label: "Apr", weekIndex: 4 },
    { label: "May", weekIndex: 8 },
    { label: "Jun", weekIndex: 13 },
    { label: "Jul", weekIndex: 17 },
    { label: "Aug", weekIndex: 21 },
    { label: "Sep", weekIndex: 26 },
    { label: "Oct", weekIndex: 30 },
    { label: "Nov", weekIndex: 35 },
    { label: "Dec", weekIndex: 39 },
    { label: "Jan", weekIndex: 43 },
    { label: "Feb", weekIndex: 48 },
];

const days = ["", "Mon", "", "Wed", "", "Fri", ""];

const lightColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const darkColors = ["#2d333b", "#0e4429", "#006d32", "#26a641", "#39d353"];

function getColor(level: number, isDark: boolean): string {
    return isDark ? darkColors[level] : lightColors[level];
}

// Cell size and gap constants
const CELL_SIZE = 11;
const CELL_GAP = 3;
const WEEK_WIDTH = CELL_SIZE + CELL_GAP; // 14px per week column
const DAY_LABEL_WIDTH = 28;

export default function GitHubContributions() {
    const totalContributions = 1050;
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const totalWidth = DAY_LABEL_WIDTH + contributionData.length * WEEK_WIDTH;

    return (
        <div className="mt-16">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-70 uppercase tracking-wider">Activity</h3>
                <span className="text-sm opacity-60">{totalContributions.toLocaleString()} contributions in the last year</span>
            </div>

            <div className="rounded-xl border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-zinc-800/50 p-4 overflow-x-auto">
                <div style={{ width: totalWidth, position: "relative", margin: "0 auto" }}>
                    {/* Month Labels — absolutely positioned at exact week columns */}
                    <div style={{ height: 16, position: "relative", marginLeft: DAY_LABEL_WIDTH, marginBottom: 4 }}>
                        {monthLabels.map((m, i) => (
                            <span
                                key={i}
                                className="text-xs opacity-50 absolute"
                                style={{ left: m.weekIndex * WEEK_WIDTH }}
                            >
                                {m.label}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-0">
                        {/* Day Labels */}
                        <div
                            className="flex flex-col justify-between text-xs opacity-40 shrink-0"
                            style={{ width: DAY_LABEL_WIDTH, height: 7 * WEEK_WIDTH }}
                        >
                            {days.map((day, i) => (
                                <span key={i} className="leading-[11px] text-right pr-1" style={{ fontSize: "9px", height: CELL_SIZE }}>
                                    {day}
                                </span>
                            ))}
                        </div>

                        {/* Contribution Grid */}
                        <div className="flex" style={{ gap: CELL_GAP }}>
                            {contributionData.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col" style={{ gap: CELL_GAP }}>
                                    {week.map((level, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className="rounded-sm"
                                            style={{
                                                width: CELL_SIZE,
                                                height: CELL_SIZE,
                                                backgroundColor: getColor(level, isDark),
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-1.5 mt-3 text-xs opacity-50">
                        <span>Less</span>
                        {[0, 1, 2, 3, 4].map((level) => (
                            <div
                                key={level}
                                className="rounded-sm"
                                style={{ width: CELL_SIZE, height: CELL_SIZE, backgroundColor: getColor(level, isDark) }}
                            />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
