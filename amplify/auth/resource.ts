import { referenceAuth } from "@aws-amplify/backend";


export const auth = referenceAuth({
  userPoolId:        'us-east-1_YFWJjLsWH',                    // EXISTENTE
  userPoolClientId:  '34ts2um6ta0aofrh081j9319ne',                      // EXISTENTE (sin secret)
});
