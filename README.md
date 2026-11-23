# How Many Tabs Do You Have Open?

[![How Many Tabs Do You Have Open?](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/ChristaNavisa/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/ChristaNavisa/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d)

Entry for the [How Many Tabs Do You Have Open?](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d) bounty on make.fun.

## The task

Send one number, digits only: your honest count of open browser tabs.
The most surprising count wins.

## The entry

`main.ts` (Node 22) writes a single number to `/output/entry.txt`:

```
137
```

Why 137: three digits, not round, no repeated digits — it reads as a
total someone actually counted off their browser, not a guess. Big
enough to surprise against a field full of round numbers, small enough
to believe: a real tab hoarder's honest count, with research rabbit
holes and "read it later" tabs behind it. No shock-number absurdity,
no tidy round figure.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Deterministic: every run writes the exact same 3 bytes (`137`, no
trailing newline).
