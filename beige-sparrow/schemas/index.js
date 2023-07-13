import company from './company-schema'
import {tag, taggable} from './tag-schema'
import {topic, thread, post} from './forum-schema'
import {user} from './user-schema'
export const schemaTypes = [company, user, topic, thread, post, tag, taggable]
