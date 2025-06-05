import React from "react";

// Example data
const goals = [
	{
		name: "My Goal",
		inner: [
			{
				name: "Inner goal 1",
				inner: [
					{ name: "Subgoal 1.1", inner: [] },
					{ name: "Subgoal 1.2", inner: [] },
				],
			},
			{
				name: "Inner goal 2",
				inner: [],
			},
		],
	},

	{
		name: "My Goal 2",
		inner: [
			{
				name: "Inner goal 1",
				inner: [
					{ name: "Subgoal 1.1", inner: [] },
					{ name: "Subgoal 1.2", inner: [] },
				],
			},
			{
				name: "Inner goal 2",
				inner: [
          { name: "Subgoal 1.1", inner: [] },
					{ name: "Subgoal 1.2", inner: [] },
        ],
			},
		],
	},
];

function GoalTree({ goals }: { goals: any[] }) {
	return (
		<div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
			{goals.map((goal, idx) => (
				<div
					key={idx}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div style={{ minWidth: 150, marginBottom: 8 }}>{goal.name}</div>
					{goal.inner && goal.inner.length > 0 && (
						<div style={{ borderLeft: "2px solid #ccc", paddingLeft: 16 }}>
							<GoalTree goals={goal.inner} />
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default function Home() {
	return (
		<div>
			<GoalTree goals={goals} />
		</div>
	);
}
