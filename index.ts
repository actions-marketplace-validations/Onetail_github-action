import { setFailed } from '@actions/core';

try {
  console.log("Hello World")
} catch (error: any) {
  setFailed(error.message);
}
