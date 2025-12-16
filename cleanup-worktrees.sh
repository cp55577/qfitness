#!/bin/bash
# Cleanup script to remove all Cursor worktrees
echo "Cleaning up Cursor worktrees..."

cd /Users/admin/dev/qfitness

# Remove all worktrees in .cursor/worktrees
if [ -d "/Users/admin/.cursor/worktrees/qfitness" ]; then
    for worktree in /Users/admin/.cursor/worktrees/qfitness/*; do
        if [ -d "$worktree" ]; then
            echo "Removing worktree: $worktree"
            git worktree remove "$worktree" --force 2>/dev/null || rm -rf "$worktree" 2>/dev/null
        fi
    done
fi

# Clean up the directory
rm -rf /Users/admin/.cursor/worktrees/qfitness 2>/dev/null

# Prune worktrees
git worktree prune

echo "✓ All worktrees cleaned up"
git worktree list
