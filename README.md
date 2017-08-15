# redux-workflow

redux reducer, action creator generators for fetch and workflow

# usage

```javascript
import { generateWorkflowReducer, generateWorkflowActionCreators } from '@isildur/redux-helpers';
const DEMO_ACTION = 'DEMO_ACITON_NAME'

const reducer = generateWorkflowReducer({actionType: DEMO_ACTION});
const action = generateWorkflowActionCreators({actionType: DEMO_ACTION});
```