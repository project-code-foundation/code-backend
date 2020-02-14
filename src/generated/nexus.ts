/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BlockCreateManyWithoutLessonInput: { // input type
    connect?: NexusGenInputs['BlockWhereUniqueInput'][] | null; // [BlockWhereUniqueInput!]
    create?: NexusGenInputs['BlockCreateWithoutLessonInput'][] | null; // [BlockCreateWithoutLessonInput!]
  }
  BlockCreateWithoutLessonInput: { // input type
    lang: NexusGenEnums['Language']; // Language!
    source: string; // String!
    type: NexusGenEnums['BlockType']; // BlockType!
  }
  BlockFilter: { // input type
    every?: NexusGenInputs['BlockWhereInput'] | null; // BlockWhereInput
    none?: NexusGenInputs['BlockWhereInput'] | null; // BlockWhereInput
    some?: NexusGenInputs['BlockWhereInput'] | null; // BlockWhereInput
  }
  BlockScalarWhereInput: { // input type
    AND?: NexusGenInputs['BlockScalarWhereInput'][] | null; // [BlockScalarWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lang?: NexusGenEnums['Language'] | null; // Language
    NOT?: NexusGenInputs['BlockScalarWhereInput'][] | null; // [BlockScalarWhereInput!]
    OR?: NexusGenInputs['BlockScalarWhereInput'][] | null; // [BlockScalarWhereInput!]
    source?: NexusGenInputs['StringFilter'] | null; // StringFilter
    type?: NexusGenEnums['BlockType'] | null; // BlockType
  }
  BlockUpdateManyDataInput: { // input type
    id?: number | null; // Int
    lang?: NexusGenEnums['Language'] | null; // Language
    source?: string | null; // String
    type?: NexusGenEnums['BlockType'] | null; // BlockType
  }
  BlockUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['BlockUpdateManyDataInput']; // BlockUpdateManyDataInput!
    where: NexusGenInputs['BlockScalarWhereInput']; // BlockScalarWhereInput!
  }
  BlockUpdateManyWithoutLessonInput: { // input type
    connect?: NexusGenInputs['BlockWhereUniqueInput'][] | null; // [BlockWhereUniqueInput!]
    create?: NexusGenInputs['BlockCreateWithoutLessonInput'][] | null; // [BlockCreateWithoutLessonInput!]
    delete?: NexusGenInputs['BlockWhereUniqueInput'][] | null; // [BlockWhereUniqueInput!]
    deleteMany?: NexusGenInputs['BlockScalarWhereInput'][] | null; // [BlockScalarWhereInput!]
    disconnect?: NexusGenInputs['BlockWhereUniqueInput'][] | null; // [BlockWhereUniqueInput!]
    set?: NexusGenInputs['BlockWhereUniqueInput'][] | null; // [BlockWhereUniqueInput!]
    update?: NexusGenInputs['BlockUpdateWithWhereUniqueWithoutLessonInput'][] | null; // [BlockUpdateWithWhereUniqueWithoutLessonInput!]
    updateMany?: NexusGenInputs['BlockUpdateManyWithWhereNestedInput'][] | null; // [BlockUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['BlockUpsertWithWhereUniqueWithoutLessonInput'][] | null; // [BlockUpsertWithWhereUniqueWithoutLessonInput!]
  }
  BlockUpdateWithWhereUniqueWithoutLessonInput: { // input type
    data: NexusGenInputs['BlockUpdateWithoutLessonDataInput']; // BlockUpdateWithoutLessonDataInput!
    where: NexusGenInputs['BlockWhereUniqueInput']; // BlockWhereUniqueInput!
  }
  BlockUpdateWithoutLessonDataInput: { // input type
    id?: number | null; // Int
    lang?: NexusGenEnums['Language'] | null; // Language
    source?: string | null; // String
    type?: NexusGenEnums['BlockType'] | null; // BlockType
  }
  BlockUpsertWithWhereUniqueWithoutLessonInput: { // input type
    create: NexusGenInputs['BlockCreateWithoutLessonInput']; // BlockCreateWithoutLessonInput!
    update: NexusGenInputs['BlockUpdateWithoutLessonDataInput']; // BlockUpdateWithoutLessonDataInput!
    where: NexusGenInputs['BlockWhereUniqueInput']; // BlockWhereUniqueInput!
  }
  BlockWhereInput: { // input type
    AND?: NexusGenInputs['BlockWhereInput'][] | null; // [BlockWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lang?: NexusGenEnums['Language'] | null; // Language
    lesson?: NexusGenInputs['LessonWhereInput'] | null; // LessonWhereInput
    NOT?: NexusGenInputs['BlockWhereInput'][] | null; // [BlockWhereInput!]
    OR?: NexusGenInputs['BlockWhereInput'][] | null; // [BlockWhereInput!]
    source?: NexusGenInputs['StringFilter'] | null; // StringFilter
    type?: NexusGenEnums['BlockType'] | null; // BlockType
  }
  BlockWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  CourseCreateInput: { // input type
    sections?: NexusGenInputs['SectionCreateManyWithoutCourseInput'] | null; // SectionCreateManyWithoutCourseInput
    title: string; // String!
  }
  CourseCreateOneWithoutSectionsInput: { // input type
    connect?: NexusGenInputs['CourseWhereUniqueInput'] | null; // CourseWhereUniqueInput
    create?: NexusGenInputs['CourseCreateWithoutSectionsInput'] | null; // CourseCreateWithoutSectionsInput
  }
  CourseCreateWithoutSectionsInput: { // input type
    title: string; // String!
  }
  CourseUpdateInput: { // input type
    id?: number | null; // Int
    sections?: NexusGenInputs['SectionUpdateManyWithoutCourseInput'] | null; // SectionUpdateManyWithoutCourseInput
    title?: string | null; // String
  }
  CourseUpdateOneWithoutSectionsInput: { // input type
    connect?: NexusGenInputs['CourseWhereUniqueInput'] | null; // CourseWhereUniqueInput
    create?: NexusGenInputs['CourseCreateWithoutSectionsInput'] | null; // CourseCreateWithoutSectionsInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['CourseUpdateWithoutSectionsDataInput'] | null; // CourseUpdateWithoutSectionsDataInput
    upsert?: NexusGenInputs['CourseUpsertWithoutSectionsInput'] | null; // CourseUpsertWithoutSectionsInput
  }
  CourseUpdateWithoutSectionsDataInput: { // input type
    id?: number | null; // Int
    title?: string | null; // String
  }
  CourseUpsertWithoutSectionsInput: { // input type
    create: NexusGenInputs['CourseCreateWithoutSectionsInput']; // CourseCreateWithoutSectionsInput!
    update: NexusGenInputs['CourseUpdateWithoutSectionsDataInput']; // CourseUpdateWithoutSectionsDataInput!
  }
  CourseWhereInput: { // input type
    AND?: NexusGenInputs['CourseWhereInput'][] | null; // [CourseWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['CourseWhereInput'][] | null; // [CourseWhereInput!]
    OR?: NexusGenInputs['CourseWhereInput'][] | null; // [CourseWhereInput!]
    sections?: NexusGenInputs['SectionFilter'] | null; // SectionFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CourseWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  LessonCreateInput: { // input type
    blocks?: NexusGenInputs['BlockCreateManyWithoutLessonInput'] | null; // BlockCreateManyWithoutLessonInput
    section?: NexusGenInputs['SectionCreateOneWithoutLessonsInput'] | null; // SectionCreateOneWithoutLessonsInput
    title: string; // String!
  }
  LessonCreateManyWithoutSectionInput: { // input type
    connect?: NexusGenInputs['LessonWhereUniqueInput'][] | null; // [LessonWhereUniqueInput!]
    create?: NexusGenInputs['LessonCreateWithoutSectionInput'][] | null; // [LessonCreateWithoutSectionInput!]
  }
  LessonCreateWithoutSectionInput: { // input type
    blocks?: NexusGenInputs['BlockCreateManyWithoutLessonInput'] | null; // BlockCreateManyWithoutLessonInput
    title: string; // String!
  }
  LessonFilter: { // input type
    every?: NexusGenInputs['LessonWhereInput'] | null; // LessonWhereInput
    none?: NexusGenInputs['LessonWhereInput'] | null; // LessonWhereInput
    some?: NexusGenInputs['LessonWhereInput'] | null; // LessonWhereInput
  }
  LessonScalarWhereInput: { // input type
    AND?: NexusGenInputs['LessonScalarWhereInput'][] | null; // [LessonScalarWhereInput!]
    blocks?: NexusGenInputs['BlockFilter'] | null; // BlockFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['LessonScalarWhereInput'][] | null; // [LessonScalarWhereInput!]
    OR?: NexusGenInputs['LessonScalarWhereInput'][] | null; // [LessonScalarWhereInput!]
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  LessonUpdateInput: { // input type
    blocks?: NexusGenInputs['BlockUpdateManyWithoutLessonInput'] | null; // BlockUpdateManyWithoutLessonInput
    id?: number | null; // Int
    section?: NexusGenInputs['SectionUpdateOneWithoutLessonsInput'] | null; // SectionUpdateOneWithoutLessonsInput
    title?: string | null; // String
  }
  LessonUpdateManyDataInput: { // input type
    id?: number | null; // Int
    title?: string | null; // String
  }
  LessonUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['LessonUpdateManyDataInput']; // LessonUpdateManyDataInput!
    where: NexusGenInputs['LessonScalarWhereInput']; // LessonScalarWhereInput!
  }
  LessonUpdateManyWithoutSectionInput: { // input type
    connect?: NexusGenInputs['LessonWhereUniqueInput'][] | null; // [LessonWhereUniqueInput!]
    create?: NexusGenInputs['LessonCreateWithoutSectionInput'][] | null; // [LessonCreateWithoutSectionInput!]
    delete?: NexusGenInputs['LessonWhereUniqueInput'][] | null; // [LessonWhereUniqueInput!]
    deleteMany?: NexusGenInputs['LessonScalarWhereInput'][] | null; // [LessonScalarWhereInput!]
    disconnect?: NexusGenInputs['LessonWhereUniqueInput'][] | null; // [LessonWhereUniqueInput!]
    set?: NexusGenInputs['LessonWhereUniqueInput'][] | null; // [LessonWhereUniqueInput!]
    update?: NexusGenInputs['LessonUpdateWithWhereUniqueWithoutSectionInput'][] | null; // [LessonUpdateWithWhereUniqueWithoutSectionInput!]
    updateMany?: NexusGenInputs['LessonUpdateManyWithWhereNestedInput'][] | null; // [LessonUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['LessonUpsertWithWhereUniqueWithoutSectionInput'][] | null; // [LessonUpsertWithWhereUniqueWithoutSectionInput!]
  }
  LessonUpdateWithWhereUniqueWithoutSectionInput: { // input type
    data: NexusGenInputs['LessonUpdateWithoutSectionDataInput']; // LessonUpdateWithoutSectionDataInput!
    where: NexusGenInputs['LessonWhereUniqueInput']; // LessonWhereUniqueInput!
  }
  LessonUpdateWithoutSectionDataInput: { // input type
    blocks?: NexusGenInputs['BlockUpdateManyWithoutLessonInput'] | null; // BlockUpdateManyWithoutLessonInput
    id?: number | null; // Int
    title?: string | null; // String
  }
  LessonUpsertWithWhereUniqueWithoutSectionInput: { // input type
    create: NexusGenInputs['LessonCreateWithoutSectionInput']; // LessonCreateWithoutSectionInput!
    update: NexusGenInputs['LessonUpdateWithoutSectionDataInput']; // LessonUpdateWithoutSectionDataInput!
    where: NexusGenInputs['LessonWhereUniqueInput']; // LessonWhereUniqueInput!
  }
  LessonWhereInput: { // input type
    AND?: NexusGenInputs['LessonWhereInput'][] | null; // [LessonWhereInput!]
    blocks?: NexusGenInputs['BlockFilter'] | null; // BlockFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['LessonWhereInput'][] | null; // [LessonWhereInput!]
    OR?: NexusGenInputs['LessonWhereInput'][] | null; // [LessonWhereInput!]
    section?: NexusGenInputs['SectionWhereInput'] | null; // SectionWhereInput
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  LessonWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  SectionCreateInput: { // input type
    course?: NexusGenInputs['CourseCreateOneWithoutSectionsInput'] | null; // CourseCreateOneWithoutSectionsInput
    lessons?: NexusGenInputs['LessonCreateManyWithoutSectionInput'] | null; // LessonCreateManyWithoutSectionInput
    title: string; // String!
  }
  SectionCreateManyWithoutCourseInput: { // input type
    connect?: NexusGenInputs['SectionWhereUniqueInput'][] | null; // [SectionWhereUniqueInput!]
    create?: NexusGenInputs['SectionCreateWithoutCourseInput'][] | null; // [SectionCreateWithoutCourseInput!]
  }
  SectionCreateOneWithoutLessonsInput: { // input type
    connect?: NexusGenInputs['SectionWhereUniqueInput'] | null; // SectionWhereUniqueInput
    create?: NexusGenInputs['SectionCreateWithoutLessonsInput'] | null; // SectionCreateWithoutLessonsInput
  }
  SectionCreateWithoutCourseInput: { // input type
    lessons?: NexusGenInputs['LessonCreateManyWithoutSectionInput'] | null; // LessonCreateManyWithoutSectionInput
    title: string; // String!
  }
  SectionCreateWithoutLessonsInput: { // input type
    course?: NexusGenInputs['CourseCreateOneWithoutSectionsInput'] | null; // CourseCreateOneWithoutSectionsInput
    title: string; // String!
  }
  SectionFilter: { // input type
    every?: NexusGenInputs['SectionWhereInput'] | null; // SectionWhereInput
    none?: NexusGenInputs['SectionWhereInput'] | null; // SectionWhereInput
    some?: NexusGenInputs['SectionWhereInput'] | null; // SectionWhereInput
  }
  SectionScalarWhereInput: { // input type
    AND?: NexusGenInputs['SectionScalarWhereInput'][] | null; // [SectionScalarWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lessons?: NexusGenInputs['LessonFilter'] | null; // LessonFilter
    NOT?: NexusGenInputs['SectionScalarWhereInput'][] | null; // [SectionScalarWhereInput!]
    OR?: NexusGenInputs['SectionScalarWhereInput'][] | null; // [SectionScalarWhereInput!]
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  SectionUpdateInput: { // input type
    course?: NexusGenInputs['CourseUpdateOneWithoutSectionsInput'] | null; // CourseUpdateOneWithoutSectionsInput
    id?: number | null; // Int
    lessons?: NexusGenInputs['LessonUpdateManyWithoutSectionInput'] | null; // LessonUpdateManyWithoutSectionInput
    title?: string | null; // String
  }
  SectionUpdateManyDataInput: { // input type
    id?: number | null; // Int
    title?: string | null; // String
  }
  SectionUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['SectionUpdateManyDataInput']; // SectionUpdateManyDataInput!
    where: NexusGenInputs['SectionScalarWhereInput']; // SectionScalarWhereInput!
  }
  SectionUpdateManyWithoutCourseInput: { // input type
    connect?: NexusGenInputs['SectionWhereUniqueInput'][] | null; // [SectionWhereUniqueInput!]
    create?: NexusGenInputs['SectionCreateWithoutCourseInput'][] | null; // [SectionCreateWithoutCourseInput!]
    delete?: NexusGenInputs['SectionWhereUniqueInput'][] | null; // [SectionWhereUniqueInput!]
    deleteMany?: NexusGenInputs['SectionScalarWhereInput'][] | null; // [SectionScalarWhereInput!]
    disconnect?: NexusGenInputs['SectionWhereUniqueInput'][] | null; // [SectionWhereUniqueInput!]
    set?: NexusGenInputs['SectionWhereUniqueInput'][] | null; // [SectionWhereUniqueInput!]
    update?: NexusGenInputs['SectionUpdateWithWhereUniqueWithoutCourseInput'][] | null; // [SectionUpdateWithWhereUniqueWithoutCourseInput!]
    updateMany?: NexusGenInputs['SectionUpdateManyWithWhereNestedInput'][] | null; // [SectionUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['SectionUpsertWithWhereUniqueWithoutCourseInput'][] | null; // [SectionUpsertWithWhereUniqueWithoutCourseInput!]
  }
  SectionUpdateOneWithoutLessonsInput: { // input type
    connect?: NexusGenInputs['SectionWhereUniqueInput'] | null; // SectionWhereUniqueInput
    create?: NexusGenInputs['SectionCreateWithoutLessonsInput'] | null; // SectionCreateWithoutLessonsInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['SectionUpdateWithoutLessonsDataInput'] | null; // SectionUpdateWithoutLessonsDataInput
    upsert?: NexusGenInputs['SectionUpsertWithoutLessonsInput'] | null; // SectionUpsertWithoutLessonsInput
  }
  SectionUpdateWithWhereUniqueWithoutCourseInput: { // input type
    data: NexusGenInputs['SectionUpdateWithoutCourseDataInput']; // SectionUpdateWithoutCourseDataInput!
    where: NexusGenInputs['SectionWhereUniqueInput']; // SectionWhereUniqueInput!
  }
  SectionUpdateWithoutCourseDataInput: { // input type
    id?: number | null; // Int
    lessons?: NexusGenInputs['LessonUpdateManyWithoutSectionInput'] | null; // LessonUpdateManyWithoutSectionInput
    title?: string | null; // String
  }
  SectionUpdateWithoutLessonsDataInput: { // input type
    course?: NexusGenInputs['CourseUpdateOneWithoutSectionsInput'] | null; // CourseUpdateOneWithoutSectionsInput
    id?: number | null; // Int
    title?: string | null; // String
  }
  SectionUpsertWithWhereUniqueWithoutCourseInput: { // input type
    create: NexusGenInputs['SectionCreateWithoutCourseInput']; // SectionCreateWithoutCourseInput!
    update: NexusGenInputs['SectionUpdateWithoutCourseDataInput']; // SectionUpdateWithoutCourseDataInput!
    where: NexusGenInputs['SectionWhereUniqueInput']; // SectionWhereUniqueInput!
  }
  SectionUpsertWithoutLessonsInput: { // input type
    create: NexusGenInputs['SectionCreateWithoutLessonsInput']; // SectionCreateWithoutLessonsInput!
    update: NexusGenInputs['SectionUpdateWithoutLessonsDataInput']; // SectionUpdateWithoutLessonsDataInput!
  }
  SectionWhereInput: { // input type
    AND?: NexusGenInputs['SectionWhereInput'][] | null; // [SectionWhereInput!]
    course?: NexusGenInputs['CourseWhereInput'] | null; // CourseWhereInput
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    lessons?: NexusGenInputs['LessonFilter'] | null; // LessonFilter
    NOT?: NexusGenInputs['SectionWhereInput'][] | null; // [SectionWhereInput!]
    OR?: NexusGenInputs['SectionWhereInput'][] | null; // [SectionWhereInput!]
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  SectionWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    bio?: string | null; // String
    email: string; // String!
    name: string; // String!
  }
  UserUpdateInput: { // input type
    bio?: string | null; // String
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  BlockType: prisma.BlockType
  Language: prisma.Language
}

export interface NexusGenRootTypes {
  Block: prisma.Block;
  Course: prisma.Course;
  Lesson: prisma.Lesson;
  Mutation: {};
  Query: {};
  Section: prisma.Section;
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BlockCreateManyWithoutLessonInput: NexusGenInputs['BlockCreateManyWithoutLessonInput'];
  BlockCreateWithoutLessonInput: NexusGenInputs['BlockCreateWithoutLessonInput'];
  BlockFilter: NexusGenInputs['BlockFilter'];
  BlockScalarWhereInput: NexusGenInputs['BlockScalarWhereInput'];
  BlockUpdateManyDataInput: NexusGenInputs['BlockUpdateManyDataInput'];
  BlockUpdateManyWithWhereNestedInput: NexusGenInputs['BlockUpdateManyWithWhereNestedInput'];
  BlockUpdateManyWithoutLessonInput: NexusGenInputs['BlockUpdateManyWithoutLessonInput'];
  BlockUpdateWithWhereUniqueWithoutLessonInput: NexusGenInputs['BlockUpdateWithWhereUniqueWithoutLessonInput'];
  BlockUpdateWithoutLessonDataInput: NexusGenInputs['BlockUpdateWithoutLessonDataInput'];
  BlockUpsertWithWhereUniqueWithoutLessonInput: NexusGenInputs['BlockUpsertWithWhereUniqueWithoutLessonInput'];
  BlockWhereInput: NexusGenInputs['BlockWhereInput'];
  BlockWhereUniqueInput: NexusGenInputs['BlockWhereUniqueInput'];
  CourseCreateInput: NexusGenInputs['CourseCreateInput'];
  CourseCreateOneWithoutSectionsInput: NexusGenInputs['CourseCreateOneWithoutSectionsInput'];
  CourseCreateWithoutSectionsInput: NexusGenInputs['CourseCreateWithoutSectionsInput'];
  CourseUpdateInput: NexusGenInputs['CourseUpdateInput'];
  CourseUpdateOneWithoutSectionsInput: NexusGenInputs['CourseUpdateOneWithoutSectionsInput'];
  CourseUpdateWithoutSectionsDataInput: NexusGenInputs['CourseUpdateWithoutSectionsDataInput'];
  CourseUpsertWithoutSectionsInput: NexusGenInputs['CourseUpsertWithoutSectionsInput'];
  CourseWhereInput: NexusGenInputs['CourseWhereInput'];
  CourseWhereUniqueInput: NexusGenInputs['CourseWhereUniqueInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  LessonCreateInput: NexusGenInputs['LessonCreateInput'];
  LessonCreateManyWithoutSectionInput: NexusGenInputs['LessonCreateManyWithoutSectionInput'];
  LessonCreateWithoutSectionInput: NexusGenInputs['LessonCreateWithoutSectionInput'];
  LessonFilter: NexusGenInputs['LessonFilter'];
  LessonScalarWhereInput: NexusGenInputs['LessonScalarWhereInput'];
  LessonUpdateInput: NexusGenInputs['LessonUpdateInput'];
  LessonUpdateManyDataInput: NexusGenInputs['LessonUpdateManyDataInput'];
  LessonUpdateManyWithWhereNestedInput: NexusGenInputs['LessonUpdateManyWithWhereNestedInput'];
  LessonUpdateManyWithoutSectionInput: NexusGenInputs['LessonUpdateManyWithoutSectionInput'];
  LessonUpdateWithWhereUniqueWithoutSectionInput: NexusGenInputs['LessonUpdateWithWhereUniqueWithoutSectionInput'];
  LessonUpdateWithoutSectionDataInput: NexusGenInputs['LessonUpdateWithoutSectionDataInput'];
  LessonUpsertWithWhereUniqueWithoutSectionInput: NexusGenInputs['LessonUpsertWithWhereUniqueWithoutSectionInput'];
  LessonWhereInput: NexusGenInputs['LessonWhereInput'];
  LessonWhereUniqueInput: NexusGenInputs['LessonWhereUniqueInput'];
  SectionCreateInput: NexusGenInputs['SectionCreateInput'];
  SectionCreateManyWithoutCourseInput: NexusGenInputs['SectionCreateManyWithoutCourseInput'];
  SectionCreateOneWithoutLessonsInput: NexusGenInputs['SectionCreateOneWithoutLessonsInput'];
  SectionCreateWithoutCourseInput: NexusGenInputs['SectionCreateWithoutCourseInput'];
  SectionCreateWithoutLessonsInput: NexusGenInputs['SectionCreateWithoutLessonsInput'];
  SectionFilter: NexusGenInputs['SectionFilter'];
  SectionScalarWhereInput: NexusGenInputs['SectionScalarWhereInput'];
  SectionUpdateInput: NexusGenInputs['SectionUpdateInput'];
  SectionUpdateManyDataInput: NexusGenInputs['SectionUpdateManyDataInput'];
  SectionUpdateManyWithWhereNestedInput: NexusGenInputs['SectionUpdateManyWithWhereNestedInput'];
  SectionUpdateManyWithoutCourseInput: NexusGenInputs['SectionUpdateManyWithoutCourseInput'];
  SectionUpdateOneWithoutLessonsInput: NexusGenInputs['SectionUpdateOneWithoutLessonsInput'];
  SectionUpdateWithWhereUniqueWithoutCourseInput: NexusGenInputs['SectionUpdateWithWhereUniqueWithoutCourseInput'];
  SectionUpdateWithoutCourseDataInput: NexusGenInputs['SectionUpdateWithoutCourseDataInput'];
  SectionUpdateWithoutLessonsDataInput: NexusGenInputs['SectionUpdateWithoutLessonsDataInput'];
  SectionUpsertWithWhereUniqueWithoutCourseInput: NexusGenInputs['SectionUpsertWithWhereUniqueWithoutCourseInput'];
  SectionUpsertWithoutLessonsInput: NexusGenInputs['SectionUpsertWithoutLessonsInput'];
  SectionWhereInput: NexusGenInputs['SectionWhereInput'];
  SectionWhereUniqueInput: NexusGenInputs['SectionWhereUniqueInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  BlockType: NexusGenEnums['BlockType'];
  Language: NexusGenEnums['Language'];
}

export interface NexusGenFieldTypes {
  Block: { // field return type
    id: number; // Int!
    lang: NexusGenEnums['Language']; // Language!
    source: string; // String!
    type: NexusGenEnums['BlockType']; // BlockType!
  }
  Course: { // field return type
    id: number; // Int!
    sections: NexusGenRootTypes['Section'][]; // [Section!]!
    title: string; // String!
  }
  Lesson: { // field return type
    blocks: NexusGenRootTypes['Block'][]; // [Block!]!
    id: number; // Int!
    title: string; // String!
  }
  Mutation: { // field return type
    createOneCourse: NexusGenRootTypes['Course']; // Course!
    createOneLesson: NexusGenRootTypes['Lesson']; // Lesson!
    createOneSection: NexusGenRootTypes['Section']; // Section!
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteOneCourse: NexusGenRootTypes['Course'] | null; // Course
    deleteOneLesson: NexusGenRootTypes['Lesson'] | null; // Lesson
    deleteOneSection: NexusGenRootTypes['Section'] | null; // Section
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    updateOneCourse: NexusGenRootTypes['Course'] | null; // Course
    updateOneLesson: NexusGenRootTypes['Lesson'] | null; // Lesson
    updateOneSection: NexusGenRootTypes['Section'] | null; // Section
    updateOneUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    course: NexusGenRootTypes['Course'] | null; // Course
    courses: NexusGenRootTypes['Course'][]; // [Course!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Section: { // field return type
    id: number; // Int!
    lessons: NexusGenRootTypes['Lesson'][]; // [Lesson!]!
    title: string; // String!
  }
  User: { // field return type
    bio: string; // String!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenArgTypes {
  Course: {
    sections: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Lesson: {
    blocks: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    createOneCourse: { // args
      data: NexusGenInputs['CourseCreateInput']; // CourseCreateInput!
    }
    createOneLesson: { // args
      data: NexusGenInputs['LessonCreateInput']; // LessonCreateInput!
    }
    createOneSection: { // args
      data: NexusGenInputs['SectionCreateInput']; // SectionCreateInput!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteOneCourse: { // args
      where: NexusGenInputs['CourseWhereUniqueInput']; // CourseWhereUniqueInput!
    }
    deleteOneLesson: { // args
      where: NexusGenInputs['LessonWhereUniqueInput']; // LessonWhereUniqueInput!
    }
    deleteOneSection: { // args
      where: NexusGenInputs['SectionWhereUniqueInput']; // SectionWhereUniqueInput!
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateOneCourse: { // args
      data: NexusGenInputs['CourseUpdateInput']; // CourseUpdateInput!
      where: NexusGenInputs['CourseWhereUniqueInput']; // CourseWhereUniqueInput!
    }
    updateOneLesson: { // args
      data: NexusGenInputs['LessonUpdateInput']; // LessonUpdateInput!
      where: NexusGenInputs['LessonWhereUniqueInput']; // LessonWhereUniqueInput!
    }
    updateOneSection: { // args
      data: NexusGenInputs['SectionUpdateInput']; // SectionUpdateInput!
      where: NexusGenInputs['SectionWhereUniqueInput']; // SectionWhereUniqueInput!
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    course: { // args
      where: NexusGenInputs['CourseWhereUniqueInput']; // CourseWhereUniqueInput!
    }
    courses: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Section: {
    lessons: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Block" | "Course" | "Lesson" | "Mutation" | "Query" | "Section" | "User";

export type NexusGenInputNames = "BlockCreateManyWithoutLessonInput" | "BlockCreateWithoutLessonInput" | "BlockFilter" | "BlockScalarWhereInput" | "BlockUpdateManyDataInput" | "BlockUpdateManyWithWhereNestedInput" | "BlockUpdateManyWithoutLessonInput" | "BlockUpdateWithWhereUniqueWithoutLessonInput" | "BlockUpdateWithoutLessonDataInput" | "BlockUpsertWithWhereUniqueWithoutLessonInput" | "BlockWhereInput" | "BlockWhereUniqueInput" | "CourseCreateInput" | "CourseCreateOneWithoutSectionsInput" | "CourseCreateWithoutSectionsInput" | "CourseUpdateInput" | "CourseUpdateOneWithoutSectionsInput" | "CourseUpdateWithoutSectionsDataInput" | "CourseUpsertWithoutSectionsInput" | "CourseWhereInput" | "CourseWhereUniqueInput" | "IntFilter" | "LessonCreateInput" | "LessonCreateManyWithoutSectionInput" | "LessonCreateWithoutSectionInput" | "LessonFilter" | "LessonScalarWhereInput" | "LessonUpdateInput" | "LessonUpdateManyDataInput" | "LessonUpdateManyWithWhereNestedInput" | "LessonUpdateManyWithoutSectionInput" | "LessonUpdateWithWhereUniqueWithoutSectionInput" | "LessonUpdateWithoutSectionDataInput" | "LessonUpsertWithWhereUniqueWithoutSectionInput" | "LessonWhereInput" | "LessonWhereUniqueInput" | "SectionCreateInput" | "SectionCreateManyWithoutCourseInput" | "SectionCreateOneWithoutLessonsInput" | "SectionCreateWithoutCourseInput" | "SectionCreateWithoutLessonsInput" | "SectionFilter" | "SectionScalarWhereInput" | "SectionUpdateInput" | "SectionUpdateManyDataInput" | "SectionUpdateManyWithWhereNestedInput" | "SectionUpdateManyWithoutCourseInput" | "SectionUpdateOneWithoutLessonsInput" | "SectionUpdateWithWhereUniqueWithoutCourseInput" | "SectionUpdateWithoutCourseDataInput" | "SectionUpdateWithoutLessonsDataInput" | "SectionUpsertWithWhereUniqueWithoutCourseInput" | "SectionUpsertWithoutLessonsInput" | "SectionWhereInput" | "SectionWhereUniqueInput" | "StringFilter" | "UserCreateInput" | "UserUpdateInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "BlockType" | "Language";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}