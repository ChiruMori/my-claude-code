@REM Force recovery CLI (simple readline REPL, no Ink TUI)
@REM bun --env-file=.env ../src/localRecoveryCli.ts "$@"

@REM Default: full CLI with Ink TUI
bun --env-file=.env ../src/entrypoints/cli.tsx
