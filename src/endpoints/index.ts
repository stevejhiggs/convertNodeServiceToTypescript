import { Router } from 'express';
import fortune from './fortune';
import health from './health';

export default function(router: Router) {
  fortune(router);
  health(router);
}
