import { Release } from "../entity/Release";
import { AppDataSource } from "../data-source";
export class ReleaseController {
   async save(release: Release) {
      const releaseTable = AppDataSource.getRepository(Release)
      return await releaseTable.save(release)
   }
}