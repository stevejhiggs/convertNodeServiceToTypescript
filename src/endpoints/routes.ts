import { Router } from 'express';
import fortune from './fortune';
import health from './health';

export default function(router: Router) {
  router.get('/fortune/:starSign', fortune);
  router.get('/health', health);
}
