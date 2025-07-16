# ⚡️🔋 XJournal

## 📜 Table of Contents

-   <a href="https://docs.google.com/document/d/1FyNvOq-SoPFW9IyBTKs_vVhP97Nbh8hF09VULyfB96A/edit?usp=sharing">Optional: readme in Polish</a>

1. [Quick start](#-1-quick-start)
2. [Application running](#-2-application-running)
3. [Application features & approache (+ gifs)](#-3-application-features--approache)
4. [Stack & Technologies & my responsibilities](#-4-stack--technologies-)
5. [Tests](#-5-tests)
6. [Planned Features](#-6-planned-features)

## 🔥 1. Quick start

### Live: [https://www.e-xjournal.vercel.app](e-xjournal.vercel.app)

### Repository: [https://github.com/Arafal21/XJournal](https://github.com/Arafal21/XJournal)

### Figma project: [Figma project](https://www.figma.com/design/ixSiVXF9JTwrgxHL12Gz8S/School-Journal---High-Fidelity-Desktop-Mobile?node-id=50-41&t=nMUCEdUptHBTtIp2-1)

### Login:

```bash
## student & parent (80 accounts):
1st Class:
Student Ethan Miller - email: ethanmiller@xjournal.com / password: 123ethan456
Parent Michael Miller - email: michaelmiller@xjournal.com / password: 234michael567


# You can log in using a parent or student account.
# For security reasons, teacher and principal credentials aren’t publicly shared in this demo.
# If you’re a recruiter and would like to explore these roles, please get in touch —
# I’ll reply promptly and provide all necessary passwords. Contact: BLANK@protonmail.com

## principal (1 account)
Principal Jason Carter: e-mail: jasoncarter@xjournal.com / password: BLANK

## teacher (8 accounts)
OOP John Smith: e-mail: johnsmith@xjournal.com / password: BLANK
...


```

For all user data, please open the allLoginData.txt file or click: https://github.com/Arafal21/XJournal/blob/main/allLoginData.txt

<br/>
<br/>
<br/>
<br/>

## 🔥 2. Application running locally (no available yet)

### Sorry, this is not yet available.

Temporarily, the application is available only through live: [https://nodejs.org/en](https://nodejs.org/en) and available code to the [https://github.com/Arafal21/XJournal](https://github.com/Arafal21/XJournal).

#### Soon:

1. Backend docs (created by me):

-   <a href="https://docs.google.com/document/d/1MdI9QoDwhngwM1wAO1vbpod7Gj11JsOYuZLyMFbteVU/edit?usp=sharing">https://docs.google.com/document/d/1MdI9QoDwhngwM1wAO1vbpod7Gj11JsOYuZLyMFbteVU/edit?usp=sharing</a>

2. Please fill /front-end/.env.local for your own:

```
NEXT_PUBLIC_API_BASE_URL=

TESTS_STUDENT_EMAIL=ethanmiller@xjournal.com
TESTS_STUDENT_PASSWORD=123ethan456

TESTS_PRINCIPAL_EMAIL=
TESTS_PRINCIPAL_PASSWORD=
```

3. Fill in constants/classes.ts with your class IDs. (This will be automated later.)

<br/>
<br/>
<br/>
<br/>

## 🔥 3. Application features & approache:

### ✅ Application Description:

A School Electronic Journal application streamlines communication and organization in schools by providing a centralized platform for managing announcements, student records (including grades, attendance, schedule, and exam calendar), and secure login access. Only the principal has the ability to add new members to the school community, while all users can access their account information via the profiles tab. The application enables teachers to manage students' progress in real-time, keeping both students and parents well-informed about their performance.

The application is optimized for large screens (992px and above, such as laptops and desktops) and mobile devices (320px to 400px), while tablets are excluded due to their low usage (MVP).
MVP - errors messages in some places are limited to alert(), but where there were errors in &lt;p> in the figma, they were applied.

The application has been aligned with the principles of accesibility.

During the development of XJournal, an online gradebook system, I concentrated on delivering a minimum viable product by including only the essential features, which allowed us to efficiently work within the limited time available as our designer and backend developer balanced their primary work commitments. I collaborated closely with a skilled designer and backend developer to deliver a robust and scalable product, and I am excited about the prospect of further expanding its capabilities in future iterations.

experimental approach - sharedClasses.scss - contains 'hiddenOnDesktop', 'hiddenOnMobile' - there is no duplication in the code - in some parts of the application you do not need to specifically create a scss file - the DRY principle is preserved. Common sense has been maintained, and it is not used to every extreme.

I decided to use !important in sharedClasses.scss - because of the specificity. By overlaying ‘hiddenOnMobile’ on an element that has display: flex to center the elements, the specificity bites (e.g. files. Header.module.scss, ClassSelectMobile.scss). So, in order not to create another container just to give className=‘hiddenOnMobile’ - I decided to use an important - it should not make future errors with styling.

Visually-Hidden `<h1>`
In `H1Company.tsx` we render our main page title as a real `<h1>`, but hide it from sighted users so it doesn’t interfere with the UI. Screen-readers still announce it, preserving correct heading structure:

```tsx
import styles from './H1Company.module.scss';

export function H1Company() {
  return <h1 className={styles.srOnly}>XJournal</h1>;
}
```

We use a special .srOnly class (“screen-reader only”) to keep the element in the DOM but visually hidden:
`

<hr/>

![login-gif](https://github.com/user-attachments/assets/44856f4a-f119-4929-9bd9-863e1766e061)

-   [x] **Login Functionality** - allows users to log in to their account with their email and password.
    -   [x] Form with validation
    -   [x] Logout feature
    -   [x] Session management
    -   [x] Role-based permissions and views
        -   [x] **Student**
            -   [x] Read-only access to assigned class and materials.
        -   [x] **Parent**
            -   [x] Read-only access to track their child’s grades and assignments.
        -   [x] **Teacher**
            -   [x] Assigned subject(s).
            -   [x] Permissions to create, edit, and delete records.
        -   [x] **Principal**
            -   [x] Full user management (create, edit, delete).

<hr/>

![announcement-gif](https://github.com/user-attachments/assets/0b8e49b3-b44f-40bd-8af7-f0769ed00fe9)

-   [x] **Announcements Page** - Highlights school news and events.
    -   [x] Fetch announcements - for students and parents.
    -   [x] Allow principals and teachers to create, edit, and delete announcements.
    -   [x] Modal dialog for roles authorized to manage announcements.
    -   [x] Display author and timestamp.
    -   [x] Display all dates in US format (MM/DD/YYYY) via `formatDateWithToday`

<hr/>

<!-- TODO: GIF -->

-   [x] **Calendar Page** - Manage quizzes and tests, ensuring everyone stays informed and prepared.
    -   [x] Display all dates in US format (MM/DD/YYYY), and 24-hour time format.
    -   [x] Fetch calendar events with device-specific views:
        -   [x] Desktop:
            -   [x] Day view.
            -   [x] Monthly view.
            -   [x] Class view (for moderating roles only).
        -   [x] Mobile:
            -   [x] Daily view.
            -   [x] Class view (for moderating roles only).
    -   [x] Students and parents:
        -   [x] Fetch timetable (parents: for their child)
    -   [x] Principal and teachers:
        -   [x] Fetch timetable:
            -   [x] Filter by class, and month.
    -   [x] Create quiz (subject, class, time blocks)
    -   [x] Edit quizzes by subject.
    -   [x] Delete quizzes.

<hr/>

![schedule](https://github.com/user-attachments/assets/5d6eb717-a60e-4195-822a-6e4d26b3e37c)

-   [x] **Schedule Page** - View and manage class timetables.
    -   [x] Students and parents:
        -   [x] Fetch timetable (parents: for their child)
    -   [x] Principal and teachers:
        -   [x] Fetch timetable:
            -   [x] Filter by class.
    -   [x] Fetch timetable with device-specific views:
        -   [x] Desktop:
            -   [x] Weekly view.
            -   [x] Class view (for moderating roles only).
        -   [x] Mobile:
            -   [x] Daily view.
            -   [x] Class view (for moderating roles only).
    -   [x] Create lessons (subject, class, time blocks)
    -   [x] Edit lessons by subject.
    -   [x] Delete lessons.

<hr/>

![presence-gif](https://github.com/user-attachments/assets/67cfe213-e11f-460c-ae24-6798b202dafb)

-   [ ] **Presence Page** _(In progress)_ - allows you to manipulate the presence of students.
    -   [x] MVP version - includes a cap on mobile with a request to open on a computer.
    -   [ ] Students and parents:
        -   [ ] Fetch attendance (parents: for their child)
    -   [ ] Principal & teachers:
        -   [ ] Fetch attendance:
            -   [ ] Filter by class, month, week.
        -   [ ] Create attendance records (per student, class, subject, day). Marking students as present, absent.
        -   [ ] Delete attendance.
        -   [ ] Edit attendance.

<hr/>

<!-- TODO: GIF -->

-   [x] **Grades Page** - Keep track of student performance.
    -   [x] European grading system (1-6).
    -   [x] Students and parents:
        -   [x] Fetch grades (parents: for their child)
    -   [x] Principal and teachers:
        -   [x] Fetch grades:
            -   [x] Filter by class, subject, and semester (e.g., Fall/Winter, Spring/Summer).
        -   [x] Create grades
        -   [x] Delete grades.
        -   [x] Edit grades.

<hr/>

![principal-panel-gif](https://github.com/user-attachments/assets/0b9230d9-6b5c-447c-9883-0c40dd097fe6)

-   [x] **Admin Page** - _(Principal only)_ - Manage user accounts.
    -   [x] MVP version - includes a cap on mobile with a request to open on a computer.
    -   [x] Principal only.
    -   [x] Add new users:
        -   [x] Teachers (assign subjects).
        -   [x] Students (assign class and auto-link parents).
    -   [x] Edit user details.
    -   [x] Delete users.
    -   [x] Filter users by first name, last name or email.
    -   [x] Quick-filter buttons for Teachers / Students / Parents.

<hr/>

![profile-gif](https://github.com/user-attachments/assets/83e25561-d250-4439-964b-699638061ec1)

-   [x] **Profile Page** – Displays account information at a glance
    -   [x] Shows role, full name, class, enrolled subjects, and last login date
    -   _Example:_
        > Role: Student  
        > Name: Dianne Russell  
        > Class: 10B  
        > Last Login: 05/30/2025

### ✅ Why this approach and not another:

-   In the calendar application, I implemented two separate components—CalendarDesktopComponent and CalendarMobileComponent—to clearly distinguish between desktop and mobile views. This separation ensures a clean and maintainable codebase by isolating platform-specific functionality and layouts.

-   In the Announcements feature, I deliberately chose not to implement useOptimistic updates (React19). Consider the following analogy: on Facebook, when a user clicks "like" on a post, the UI immediately reflects that change—even if the backend hasn't fully confirmed it yet. For a social interaction like a "like," this slight is acceptable.
    However, think about a bank transfer: if the transaction were marked as complete on the user's screen before the backend actually processed it, and the user closed the page, it could lead to serious issues. Similarly, in our school application, if a principal were to see an announcement optimistically added and assume it's been saved, only to have it fail on the backend, it could result in critical miscommunications—like missing an urgent meeting or failing to broadcast important information.
    By avoiding optimistic updates for announcements, we ensure that when the UI indicates a new announcement, it has been fully verified by the backend, maintaining the integrity and reliability of this crucial functionality.

-   ModalAddNewUserAdmin: In the useEffect we watch isModalVisible, and whenever it flips to true we bump our local modalKey. Passing that key into AdminModalContent forces React to unmount the old instance and mount a fresh one each time the modal opens—automatically resetting all internal state (including validation errors) without any manual cleanup.

-   My backend colleague decided not to share his code publicly, so all his collaboration with my changes and commits are on a private repository.

<br/>
<br/>
<br/>
<br/>

## 🔥 4. Stack & Technologies :

### ✅ My stack - Frontend React Developer - [Rafal](https://github.com/Arafal21):

-   **Framework:** React 19 & Next.js 15 (TypeScript)
-   **Styling:** SCSS + CSS Modules
-   **Animation:** motion.dev
-   **Testing:** Playwright
-   **API testing / debugging:** Postman
-   **Hosting:** Vercel
-   **Team work:** active communication with back-end & UX, co-creating the app’s overall concept and feature roadmap
-   **Support:** AI Support + Documentation + own notes + inquiries to the development communities + code review feedback

### ✅ Colleagues:

Thanks for your cooperation:

-   Backend developer: [BLANK](https://github.com/l4npl): Node.js + TypeScript + Express.js + MongoDB + Redis
-   Designer: [BLANK](https://uxfol.io/de179750): Figma

<br/>
<br/>
<br/>
<br/>

## 🔥 5. Tests

/front-end/tests

All tests running: `npx playwright test --ui`

Test configuration:
Some scenarios (e.g. posting or editing announcements) require a valid user session. Provide your credentials via:
Environment variables in .env.local

-   [ ] **Login Page**:
    -   [ ] Student's:
        -   [x] ✅ Succesful login
    -   [ ] Parent:
        -   [x] ✅ Succesful login
    -   [ ] Teacher:
        -   [x] ✅ Succesful login
    -   [ ] Principal:
        -   [x] ✅ Succesful login
-   [ ] **Announcements Page**:
    -   [ ] Student's:
        -   [x] 👀 Displaying announcements
    -   [ ] Parent:
        -   [x] 👀 Displaying announcements
    -   [ ] Teacher:
        -   [x] 👀 Displaying announcements
        -   [x] ➕ Posting a new announcement | 🖊 Editing an existing announcement | 🗑 Deleting an announcement
    -   [ ] Principal:
        -   [x] 👀 Displaying announcements
        -   [x] ➕ Posting a new announcement | 🖊 Editing an existing announcement | 🗑 Deleting an announcement
-   [ ] **Grades Page**:
    -   [ ] Student's:
        -   [ ] 👀 Displaying grades
    -   [ ] Parent:
        -   [ ] 👀 Displaying grades
    -   [ ] Teacher:
        -   [ ] 👀 Displaying grades
        -   [ ] ➕ Creating a new grade
        -   [ ] 🖊 Editing an existing grade
        -   [ ] 🗑 Deleting a grade
    -   [ ] Principal:
        -   [ ] 👀 Displaying grades
        -   [ ] ➕ Posting a new grade
        -   [ ] 🖊 Editing an existing grade
        -   [ ] 🗑 Deleting a grade
-   [ ] **Admin Page** (allowed to principal only):
    -   [ ] Principal:
        -   [ ] 👀 Displaying
        -   [ ] ➕ Posting
        -   [ ] 🖊 Editing
        -   [ ] 🗑 Deleting
-   [ ] **Schedule Page**:
    -   [ ] Student's:
        -   [ ] 👀 Displaying lesson's schedule
    -   [ ] Parent:
        -   [ ] 👀 Displaying lesson's schedule
    -   [ ] Teacher:
        -   [ ] 👀 Displaying lesson's schedule
        -   [ ] ➕ Creating a new schedule
        -   [ ] 🖊 Editing an existing schedule
        -   [ ] 🗑 Deleting a schedule
    -   [ ] Principal:
        -   [ ] 👀 Displaying lesson's schedule
        -   [ ] ➕ Posting a new schedule
        -   [ ] 🖊 Editing an existing schedule
        -   [ ] 🗑 Deleting a schedule
-   [ ] **Calendar Page**:
    -   [ ] Student's:
        -   [ ] 👀 Displaying lesson's calendar
    -   [ ] Parent:
        -   [ ] 👀 Displaying lesson's calendar
    -   [ ] Teacher:
        -   [ ] 👀 Displaying lesson's calendar
        -   [ ] ➕ Creating a new event
        -   [ ] 🖊 Editing an existing event
        -   [ ] 🗑 Deleting a event
    -   [ ] Principal:
        -   [ ] 👀 Displaying lesson's calendar
        -   [ ] ➕ Posting a new event
        -   [ ] 🖊 Editing an existing event
        -   [ ] 🗑 Deleting a event
-   [ ] **Presence Page**: - In progress
    -   [ ] Student's:
        -   [ ] 👀 Displaying student's presence (in progress)
    -   [ ] Parent:
        -   [ ] 👀 Displaying their own child's presence (in progress)
    -   [ ] Teacher:
        -   [ ] 👀 Displaying presence (in progress)
        -   [ ] ➕ Creating a new presence (in progress)
        -   [ ] 🖊 Editing an existing presence (in progress)
        -   [ ] 🗑 Deleting a presence (in progress)
    -   [ ] Principal:
        -   [ ] 👀 Displaying presence (in progress)
        -   [ ] ➕ Posting a new presence (in progress)
        -   [ ] 🖊 Editing an existing presence (in progress)
        -   [ ] 🗑 Deleting a presence (in progress)

<br/>
<br/>
<br/>
<br/>

## 🔥 6. Planned features:

1. Presence Page - in progress
2. Switch to European 1-6/US A-F grades system (now only european)
3. Last login in Admin Panel - in progress
4. Real time chat with socket.io or/and video chat.
5. AI feature.

## Contributing

Contributions are the lifeblood of the open-source community—fueling learning, sparking inspiration, and driving innovation. Your input, whether big or small, is immensely valued.

If you have an idea to improve this project, or have found a bug, please fork the repository and submit a pull request. Alternatively, feel free to open an issue labelled “enhancement.” And if you find this work useful, don’t forget to give it a star!

Thank you for your support!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
