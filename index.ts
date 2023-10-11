import { setFailed } from '@actions/core';

try {
  console.log("Onetail Hello World")
} catch (error: any) {
  setFailed(error.message);
}
