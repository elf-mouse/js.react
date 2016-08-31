Q: Warning: Component's children should not be mutated.

A: This is probably caused by [this mutation check](https://github.com/facebook/react/blob/328fc75bc910032ff37dc9d93429fb14b476bd0d/src/renderers/shared/hooks/ReactChildrenMutationWarningHook.js#L34), which was introduced in 15.3.0, but it doesn't work for NaN, because NaN != NaN
