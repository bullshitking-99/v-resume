import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Building, Code, FileText, Github, Mail, Phone, User } from "lucide-react"
import { CompanyCard } from "@/components/company-card"
import { ProjectCard } from "@/components/project-card"
import { PersonalProjectCard } from "@/components/personal-project-card"
import { BlogCard } from "@/components/blog-card"

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex justify-center">
      <article
        className="w-[210mm] bg-white p-8 shadow-sm rounded-lg space-y-6"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Header Section */}
        <header className="flex justify-between items-start">
          <div className="flex flex-col justify-between h-[88px]">
            <h1 className="text-3xl font-bold tracking-tight" itemProp="name">
              李名河
            </h1>
            <div className="text-sm text-muted-foreground">
              <p itemProp="alumniOf">北京工业大学 / 软件工程硕士</p>
              <p itemProp="alumniOf">湖北中医药大学 / 信息工程学士</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <a
                href="https://juejin.cn/user/4402870941397416"
                target="_blank"
                className="hover:underline"
                itemProp="sameAs"
                rel="noreferrer"
              >
                掘金/迷途小前端_99
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/bullshitking-99"
                target="_blank"
                className="hover:underline"
                itemProp="sameAs"
                rel="noreferrer"
              >
                github/bullshitking-99
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span itemProp="email">liminghe_1999@163.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span itemProp="telephone">15549925550</span>
            </div>
          </div>
        </header>

        {/* Experience Overview Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <User className="h-5 w-5" />
            经历概述
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* ByteDance Card - Left Column */}
            <div itemScope itemType="https://schema.org/OrganizationRole">
              <meta itemProp="roleName" content="前端开发工程师" />
              <meta itemProp="startDate" content="2024" />
              <meta itemProp="endDate" content="2025" />
              <CompanyCard
                company="字节跳动"
                department="商业化"
                position="校招"
                period="2024-2025"
                techStack={["React", "Canvas", "AI 提效"]}
                projects={[
                  {
                    name: "可编辑表格升级",
                    description: "基于Canvas+DOM的高性能表格解决方案，首屏渲染时间减少88%，数千条数据下稳定运行",
                  },
                  {
                    name: "指标管理重构",
                    description: "优化指标系统的用户体验和核心业务度量，一次创建成功率提升30%，指标创建时间缩短60%+",
                  },
                  {
                    name: "客户数据平台业务迭代",
                    description: "负责标签与指标系统的需求开发，提升系统的易用度和功能性",
                  },
                  {
                    name: "团队技术建设与分享",
                    description: "主动参与部门组件库建设，贡献通用组件feedback、Carousel，业务组件Search",
                  },
                ]}
                className="h-full"
              />
            </div>

            {/* Right Column - Kuaishou and Personal Projects */}
            <div className="space-y-4">
              <div itemScope itemType="https://schema.org/OrganizationRole">
                <meta itemProp="roleName" content="前端开发实习生" />
                <meta itemProp="startDate" content="2023" />
                <meta itemProp="endDate" content="2023" />
                <CompanyCard
                  company="快手"
                  department="本地生活"
                  position="实习"
                  period="2023"
                  techStack={["React", "React Native", "微前端", "monorepo"]}
                  projects={[
                    {
                      name: "商家与运营结算系统开发",
                      description: "基于微前端架构的结算系统重构，NPS从7.13提升至8.0",
                    },
                    {
                      name: "营销无代码平台建设",
                      description: "拖拽式活动页面创建工具，活动创建时间从5pd+降为2pd-",
                    },
                  ]}
                />
              </div>

              <Card className="p-4">
                <h3 className="text-base font-medium mb-2">个人项目</h3>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <Badge variant="secondary" className="text-xs font-normal rounded">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-normal rounded">
                    langchain
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-normal rounded">
                    agent
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-normal rounded">
                    Vue3
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-normal rounded">
                    TypeScript
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-x-2 text-sm">
                  <span className="font-medium">ChatTask</span>
                  <span className="font-medium">技术博客</span>
                  <span className="font-medium">toc-creator</span>
                  <span className="font-medium">vue3-img-viewer</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Introduction Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Building className="h-5 w-5" />
            项目介绍
          </h2>

          <div className="space-y-4">
            {/* ByteDance Projects */}
            <ProjectCard
              title="可编辑表格升级"
              situation="当前基于DOM的可编辑表格因业务数据量扩大出现卡顿甚至崩溃，需要快速调研和开发一款新方案，满足现在和未来的性能需求"
              task="综合业务场景和实现成本进行技术选型，自实现表单依赖、联动等复杂功能，在大批量并发任务中确保初始化和交互性能"
              action={[
                "表格和编辑器渲染：剖析性能阻塞点，通过调研和综合对比，确定Canvas+DOM方案",
                "编辑器配置管理：在大批量异步编辑器配置获取和解析场景下，通过编辑器配置类型和属性判断是否缓存",
                "表单联动：借鉴react和js运行机制，通过封装闭包的重载函数统一收集和去重单元格字段",
                "AI提效：通过7轮渐进式、分阶段的模块、交互、接口设计，驱动AI迅速完成主体代码",
              ]}
              result={[
                "初始化时，对比原方案极限（百条数据），首屏渲染时间减少88%，数千条数据下也能稳定运行",
                "交互中，与原DOM方案INP指数相比，轻型编辑器相当，携带依赖联动的重型编辑器仅轻微增加，无卡顿",
                "内置的异步配置获取API和可拖拽的动态列宽也进一步提升开发者和用户的使用体验",
              ]}
            />

            <ProjectCard
              title="指标管理重构"
              situation="指标系统的核心业务度量一直不佳，在泳道人力不稳定和团队文档缺失的情况下，需要找到阻塞体验的主要原因，并设计和实现优化方案"
              task="如何根据埋点报告和用户反馈挖掘问题；改造成本大，如何推动团队合力实施，并确保后续效果的持续提升"
              action={[
                "优化方向判断：以用户的一次完整会话为周期，重点观察用户结束会话的操作，发现创建流程为优化重点",
                "改造方案设计：以主动的细化推荐替代被动的全量查找，根据依赖关系反转配置顺序、组合位置",
                "方案实现推动：与导师协商方案，顺应部门更换组件库的时机，主动与团队协商，确定方案高优进行",
                "改造效果跟踪：定期观察核心指标变化，统计oncall意见，规划下一阶段改进策略",
              ]}
              result={[
                "重建页面共5+，涉及列表、创建、详情等常用业务场景的全流程",
                "组件库bug率高且oncall人力不足时，自定义构建插件，根据依赖关系提炼串联的组件库源码，结合AI大模型提升debug效率",
                "在年度反馈中，一次创建成功率提升30%，指标创建时间缩短60%+，指标使用率提升30%+",
              ]}
            />

            {/* Kuaishou Projects */}
            <ProjectCard
              title="商家与运营结算系统开发"
              task="基于微前端架构抽离和重构结算系统，负责其中对账单模块，将框架从Vue2转为React，梳理模块数据流并基于zustand重建状态管理"
              action={[
                "模块重构：基于微前端架构抽离和重构结算系统，负责其中对账单模块，将框架从Vue2转为React",
                "状态管理：梳理模块数据流并基于zustand重建状态管理，优化数据流转和组件通信",
                "横向建设：基于结算业务的需求迭代，助力团队中业务模版与组件的沉淀",
              ]}
              result={[
                "帮助结算系统NPS从7.13提升至8.0，账单反馈周均60+降至20-",
                "季度评选中获得先进奖，被评为团队核心贡献者",
              ]}
            />

            <ProjectCard
              title="营销无代码平台建设"
              task="基于运营同学的需求调研和反馈，新增和维护创建活动推广页面使用的拖拽组件库"
              action={[
                "组件开发：设计并实现多个营销活动常用的拖拽组件，支持自定义样式和交互行为",
                "平台建设：参与无代码平台的整体架构设计和实现，确保组件间的兼容性和可扩展性",
                "用户体验：通过与运营同学的密切合作，不断优化组件的易用性和功能性",
              ]}
              result={[
                "助力运营自主创建活动页面，使单个活动创建平均时间从5pd+降为2pd-",
                "提高了运营团队的工作效率，减少了对开发资源的依赖",
              ]}
            />
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Code className="h-5 w-5" />
            开源与个人项目
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <PersonalProjectCard
              title="ChatTask"
              techStack={["Next.js", "langchain", "agent", "OpenAI"]}
              description="基于大语言模型的任务管理与执行助手，支持任务分解、进度跟踪和自动执行，提高工作效率和任务完成质量"
            />

            <PersonalProjectCard
              title="InkBlogger博客模板"
              period="2023"
              techStack={["Vue3", "Vite", "TypeScript", "Sass"]}
              description="使用自制的拖拽目录和图片预览组件优化博客浏览体验，通过统一的用户信息和内容接口达到开箱即用"
            />

            <BlogCard
              title="技术博客"
              url="https://juejin.cn/user/4402870941397416"
              techStack={["JavaScript", "Vue", "React", "npm"]}
              posts={[
                { title: "大函数组件时代之Hooks海贼团", url: "https://juejin.cn/post/7401703734856089600" },
                { title: "手写节流与防抖？生动展示装饰器原理与实践" },
                { title: "和我一起一步步写个页面通用的toc目录组件" },
                { title: "还在用typeof、instanceof？是时候给你的类型检查升个级了" },
              ]}
            />

            <div className="space-y-4">
              <PersonalProjectCard
                title="toc-creator"
                url="https://www.npmjs.com/package/toc-creator"
                techStack={["Vue3", "TypeScript"]}
                description="自动生成的可拖拽目录，支持自定义样式和交互行为，已获得500+下载量"
              />

              <PersonalProjectCard
                title="vue3-img-viewer"
                url="https://www.npmjs.com/package/vue3-img-viewer"
                techStack={["Vue3", "TypeScript"]}
                description="轻量、平滑的图片预览组件，支持缩放、旋转等功能，已获得300+下载量"
              />
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

